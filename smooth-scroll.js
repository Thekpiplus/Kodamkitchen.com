(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.documentElement.style.scrollBehavior = "smooth";
    return;
  }

  // Phones / tablets already use native momentum scrolling
  if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
    document.documentElement.style.scrollBehavior = "smooth";
    return;
  }

  var ease = 0.14;
  var wheelScale = 0.9;
  var current = window.scrollY || 0;
  var target = current;
  var ticking = false;
  var locked = false;

  function maxScroll() {
    return Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
  }

  function clamp(value) {
    return Math.max(0, Math.min(maxScroll(), value));
  }

  function step() {
    if (locked) {
      ticking = false;
      return;
    }
    var diff = target - current;
    if (Math.abs(diff) < 0.35) {
      current = target;
      window.scrollTo(0, current);
      ticking = false;
      return;
    }
    current += diff * ease;
    window.scrollTo(0, current);
    requestAnimationFrame(step);
  }

  function kick() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(step);
    }
  }

  window.addEventListener(
    "wheel",
    function (event) {
      if (locked || event.ctrlKey) return;
      event.preventDefault();
      target = clamp(target + event.deltaY * wheelScale);
      kick();
    },
    { passive: false }
  );

  // Keep in sync if user drags the scrollbar or uses keyboard
  var syncing = false;
  window.addEventListener(
    "scroll",
    function () {
      if (ticking || locked || syncing) return;
      current = window.scrollY || 0;
      target = current;
    },
    { passive: true }
  );

  document.addEventListener("click", function (event) {
    var link = event.target.closest('a[href^="#"]');
    if (!link) return;
    var id = link.getAttribute("href");
    if (!id || id === "#") return;
    var el = document.querySelector(id);
    if (!el) return;
    event.preventDefault();
    target = clamp(el.getBoundingClientRect().top + window.scrollY - 12);
    kick();
    history.pushState(null, "", id);
  });

  window.kodamSmoothScroll = {
    stop: function () {
      locked = true;
      ticking = false;
      current = window.scrollY || 0;
      target = current;
    },
    start: function () {
      locked = false;
      current = window.scrollY || 0;
      target = current;
    },
  };
})();
