(function () {
  const translations = {
    en: {
      nav_menu: "Menu",
      nav_atmosphere: "Atmosphere",
      nav_locations: "Locations",
      nav_hours: "Hours",
      hero_tagline: "Delicious food, fresh ingredients, and a great atmosphere.",
      hero_cta: "Choose your branch",
      hero_headline: "อาหารอร่อย บรรยากาศดี",
      about_hours: "We are open daily from 11am – 10.30pm",
      about_title:
        "KoDam Kitchen – The hidden gem for local Thai and seafood cuisine",
      about_subtitle: "Local Favourites In Ao Nang",
      about_p1:
        "Hideaway in the back streets of downtown Ao Nang is a charming Thai Local restaurant called Kodam Kitchen. There are several diners to enjoy Thai food in Ao Nang, but sometimes it’s worth stepping off the main strip to find this hidden gem.",
      about_p2:
        "Kodam Kitchen serves delicious, authentic Thai cuisine with an ambience that cannot be beat. Enjoy dishes like the delicious Pad Thai Goong (Traditional Thai Style Fried rice noodles) or Seafood Jarn Ron (An arrays of Seafood combination Wok fried with Chili paste oil and fragrant herbs served in hot pan). If you like curry, try Massaman Gai with Thai Roti – This is highly recommended. Treat yourself to a selection of fresh seafood such as baked mussels in a hot pot with Thai basil or deep-fried garlic snapper.",
      about_p3:
        "Friendly staff will greet you with a smile with outdoor alfresco style seating area. The surrounded area is lush, potted greenery that makes you feel like you are right in the jungle. Despite the quiet, relaxing mood, you are still close enough to the beach to enjoy a moonlight stroll after you have had your fill of homemade and delicious Thai desserts. Try the classic Mango Sticky rice or the Kloud Buad Chee (Special Banana cooked in Fresh Coconut Milk).",
      about_p4:
        "The restaurant is located next to the best Massage shop, Massage Corner. Plan a visit to have a relaxing massage and continue to KoDam Kitchen to enjoy laid-back vibes of this great eatery.",
      menu_title: "เมนูแนะนำ",
      menu_subtitle: "Recommended Menu",
      menu_intro:
        "Signature Thai and seafood favourites guests return for again and again.",
      menu_cta: "View Full Menu",
      menu_page_title: "Full Menu",
      menu_page_subtitle: "Our complete menu",
      menu_page_intro: "Scroll to browse every page of our Thai and seafood menu.",
      menu_page_back: "← Back to home",
      dish1_name: "แกงส้มปลากระพง",
      dish1_en: "Sour Curry with Sea Bass",
      dish1_desc:
        "Spicy-tangy Southern Thai sour curry with tender sea bass and bamboo shoots in a bright, herb-infused broth.",
      dish2_name: "ปลาทอดโบราณ",
      dish2_en: "Ancient Fried Fish",
      dish2_desc:
        "Crispy whole fried fish topped with lemongrass, shallots, chilies, and fresh herbs in a zesty savory sauce.",
      dish3_name: "ใบเหลียงผัดไข่",
      dish3_en: "Stir-fried Malindjo Leaves with Egg",
      dish3_desc:
        "Southern Thai favourite — glossy malindjo leaves stir-fried with fresh egg and fragrant crispy garlic.",
      dish4_name: "ข้าวผัดสับปะรด",
      dish4_en: "Pineapple Fried Rice",
      dish4_desc:
        "Fragrant turmeric fried rice with jumbo shrimp, Chinese sausage, and roasted cashews — served in a fresh pineapple shell.",
      dish5_name: "ห่อหมกทะเลมะพร้าว",
      dish5_en: "Steamed Seafood Curry in Young Coconut",
      dish5_desc:
        "Rich aromatic seafood curry steamed inside a fresh young coconut — creamy, fragrant, and finished with kaffir lime and coconut cream.",
      dish6_name: "น้ำพริกกะปิ",
      dish6_en: "Shrimp Paste Chili Dip",
      dish6_desc:
        "Classic spicy shrimp paste dip served with cha-om omelet, crispy fried vegetables, and fresh cucumber.",
      atm_title: "บรรยากาศร้าน",
      atm_subtitle: "Our Atmosphere",
      atm_intro:
        "Two branches, two moods — jungle hideaway downtown, and seaside dining by the water. Tap any photo to view larger.",
      atm_b1_label: "Branch 01 · Ao Nang Downtown",
      atm_b1_title: "Kodam Kitchen Branch 1",
      atm_b2_label: "Branch 02 · Beachfront & Seaside",
      atm_b2_title: "Kodam Kitchen Branch 2 Oceanview",
      loc_label: "Our Locations",
      loc_title: "Visit KoDam Kitchen",
      loc_intro:
        "Two distinct atmospheres — clearly separated so you can pick the experience that suits your evening.",
      b1_label: "Downtown Ao Nang",
      b1_title: "KoDam Kitchen Branch 1",
      b1_sub: "(Ao Nang Downtown)",
      b1_desc:
        "A hidden gem on Khlong Hang Road — close to the market, wrapped in greenery, and favoured by travellers discovering Ao Nang beyond the beach strip.",
      b1_f1: "No Parking Available",
      b1_f1d: "Arrive by tuk-tuk, Grab, or on foot from downtown.",
      b1_f2: "Popular for International Tourists",
      b1_f2d: "A well-known stop for authentic Thai at a local price.",
      b1_f3: "Lush Jungle Vibe",
      b1_f3d: "Alfresco seating among potted greenery and quiet lanes.",
      b1_wa: "Chat on WhatsApp (Branch 1)",
      b1_map: "Map · Branch 1 · Khlong Hang Rd, Ao Nang",
      b2_label: "Ao Nam Mao · Seaside",
      b2_title: "KoDam Kitchen Branch 2",
      b2_sub: "(Beachfront & Seaside)",
      b2_desc:
        "Oceanview dining on the way to the Railay pier — sea breeze, open terrace, and a slower, more romantic evening by the water.",
      b2_f1: "Beachfront View",
      b2_f1d: "Open-air tables looking out over Ao Nam Mao bay.",
      b2_f2: "Spacious Private Parking Available",
      b2_f2d: "Convenient if you are driving from Ao Nang or Krabi Town.",
      b2_f3: "Romantic Sunset Ambience",
      b2_f3d: "Arrive 17:00–18:30 for the golden hour over the sea.",
      b2_wa: "Chat on WhatsApp (Branch 2)",
      b2_map: "Map · Branch 2 · Ao Nam Mao, Sai Thai",
      hours_label: "Hours",
      hours_title: "Open daily · 11:00 – 22:30",
      reserve_label: "Reservations and Bookings",
      reserve_b1_name: "Kodam Kitchen Branch 1",
      reserve_b2_name: "Kodam Kitchen Branch 2",
      email_label: "Email",
      footer: "© KoDam Kitchen · Ao Nang & Ao Nam Mao, Krabi",
    },
    th: {
      nav_menu: "เมนู",
      nav_atmosphere: "บรรยากาศ",
      nav_locations: "สาขา",
      nav_hours: "เวลาเปิด",
      hero_tagline: "อาหารอร่อย วัตถุดิบสดใหม่ และบรรยากาศดี",
      hero_cta: "เลือกสาขาของคุณ",
      hero_headline: "อาหารอร่อย บรรยากาศดี",
      about_hours: "เปิดบริการทุกวัน 11:00 – 22:30 น.",
      about_title: "KoDam Kitchen – ร้านลับที่ต้องลอง อาหารไทยพื้นถิ่นและซีฟู้ดสดใหม่",
      about_subtitle: "เมนูโปรดในอ่าวนาง",
      about_p1:
        "ซ่อนตัวอยู่ในซอยหลังเมืองอ่าวนาง คือร้านอาหารไทยท้องถิ่นแสนอบอุ่นอย่าง Kodam Kitchen ในอ่าวนางมีร้านอาหารไทยหลายแห่ง แต่บางครั้งการออกจากถนนหลักเพื่อค้นหาร้านลับอย่างนี้ก็คุ้มค่า",
      about_p2:
        "Kodam Kitchen เสิร์ฟอาหารไทยรสดั้งเดิมในบรรยากาศที่อบอุ่น ลองเมนูอย่างผัดไทยกุ้ง ซีฟู้ดจานร้อน หรือมัสมั่นไก่คู่โรตีไทยที่แนะนำเป็นพิเศษ รวมถึงซีฟู้ดสดอย่างหอยแมลงภู่หม้อไฟใบโหระพา และปลากะพงทอดกระเทียม",
      about_p3:
        "พนักงานยิ้มแย้มต้อนรับ พร้อมโซนนั่งกลางแจ้งท่ามกลางต้นไม้เขียวขจีให้รู้สึกเหมือนอยู่ในป่า แม้จะเงียบสงบ แต่ยังใกล้ชายหาดพอสำหรับเดินเล่นหลังอาหาร และปิดท้ายด้วยขนมหวานอย่างข้าวเหนียวมะม่วง หรือกล้วยบวดชี",
      about_p4:
        "ร้านตั้งอยู่ถัดจาก Massage Corner ร้านนวดชื่อดัง วางแผนมาผ่อนคลายด้วยนวดแล้วแวะกินที่ KoDam Kitchen เพื่อสัมผัสบรรยากาศสบายๆ ของร้านได้อย่างลงตัว",
      menu_title: "เมนูแนะนำ",
      menu_subtitle: "เมนูแนะนำจากทางร้าน",
      menu_intro: "เมนูซิกเนเจอร์อาหารไทยและซีฟู้ดที่ลูกค้ากลับมากินซ้ำแล้วซ้ำอีก",
      menu_cta: "ดูเมนูทั้งหมด",
      menu_page_title: "เมนูทั้งหมด",
      menu_page_subtitle: "เมนูอาหารทั้งหมดของร้าน",
      menu_page_intro: "เลื่อนดูเมนูอาหารไทยและซีฟู้ดทั้งหมดของร้าน",
      menu_page_back: "← กลับหน้าหลัก",
      dish1_name: "แกงส้มปลากระพง",
      dish1_en: "Sour Curry with Sea Bass",
      dish1_desc:
        "แกงส้มใต้รสจัดจ้านเปรี้ยวเผ็ด ใส่ปลากระพงนุ่มและหน่อไม้ในน้ำแกงหอมเครื่องเทศ",
      dish2_name: "ปลาทอดโบราณ",
      dish2_en: "Ancient Fried Fish",
      dish2_desc:
        "ปลาทอดทั้งตัวกรอบนอกนุ่มใน โรยตะไคร้ หอมแดง พริก และสมุนไพรสด พร้อมน้ำราดรสจัดจ้าน",
      dish3_name: "ใบเหลียงผัดไข่",
      dish3_en: "Stir-fried Malindjo Leaves with Egg",
      dish3_desc:
        "เมนูใต้ขึ้นชื่อ — ใบเหลียงผัดกับไข่ให้เงางาม หอมกระเทียมเจียวกรอบ",
      dish4_name: "ข้าวผัดสับปะรด",
      dish4_en: "Pineapple Fried Rice",
      dish4_desc:
        "ข้าวผัดขมิ้นหอมกรุ่น ใส่กุ้งตัวโต กุนเชียง และเม็ดมะม่วงหิมพานต์ เสิร์ฟในลูกสับปะรดสด",
      dish5_name: "ห่อหมกทะเลมะพร้าว",
      dish5_en: "Steamed Seafood Curry in Young Coconut",
      dish5_desc:
        "ห่อหมกทะเลเข้มข้น นึ่งในลูกมะพร้าวอ่อน หอมใบมะกรูดและกะทิสด",
      dish6_name: "น้ำพริกกะปิ",
      dish6_en: "Shrimp Paste Chili Dip",
      dish6_desc:
        "น้ำพริกกะปิรสจัดจ้าน คู่ไข่ทอดชะอม ผักชุบแป้งทอด และแตงกวาสด",
      atm_title: "บรรยากาศร้าน",
      atm_subtitle: "บรรยากาศของเรา",
      atm_intro:
        "สองสาขา สองบรรยากาศ — มุมลับกลางเมือง และวิวทะเลริมน้ำ กดรูปเพื่อดูภาพขยาย",
      atm_b1_label: "สาขา 01 · อ่าวนางตัวเมือง",
      atm_b1_title: "Kodam Kitchen สาขา 1",
      atm_b2_label: "สาขา 02 · ริมทะเล",
      atm_b2_title: "Kodam Kitchen สาขา 2 Oceanview",
      loc_label: "สถานที่ของเรา",
      loc_title: "แวะมาที่ KoDam Kitchen",
      loc_intro:
        "สองบรรยากาศที่แตกต่างชัดเจน — เลือกประสบการณ์ที่เหมาะกับค่ำคืนของคุณ",
      b1_label: "อ่าวนางตัวเมือง",
      b1_title: "KoDam Kitchen สาขา 1",
      b1_sub: "(อ่าวนางตัวเมือง)",
      b1_desc:
        "ร้านลับบนถนนคลองแห้ง ใกล้ตลาด แวดล้อมด้วยต้นไม้เขียว และเป็นที่นิยมของนักท่องเที่ยวที่อยากค้นหาอ่าวนางนอกชายหาด",
      b1_f1: "ไม่มีที่จอดรถ",
      b1_f1d: "แนะนำมาด้วยตุ๊กตุ๊ก Grab หรือเดินจากตัวเมือง",
      b1_f2: "ยอดนิยมในหมู่นักท่องเที่ยว",
      b1_f2d: "จุดแวะชิมอาหารไทยแท้ในราคาย่อมเยา",
      b1_f3: "บรรยากาศป่าเขียวชอุ่ม",
      b1_f3d: "นั่งกลางแจ้งท่ามกลางต้นไม้และซอยเงียบสงบ",
      b1_wa: "แชท WhatsApp (สาขา 1)",
      b1_map: "แผนที่ · สาขา 1 · ถนนคลองแห้ง อ่าวนาง",
      b2_label: "อ่าวน้ำเมา · ริมทะเล",
      b2_title: "KoDam Kitchen สาขา 2",
      b2_sub: "(ริมทะเลและชายหาด)",
      b2_desc:
        "รับประทานอาหารวิวทะเล ระหว่างทางไปท่าเรือไร่เลย์ — ลมทะเล ระเบียงเปิด และบรรยากาศโรแมนติกยามเย็น",
      b2_f1: "วิวริมทะเล",
      b2_f1d: "โต๊ะกลางแจ้งมองออกไปยังอ่าวน้ำเมา",
      b2_f2: "มีที่จอดรถส่วนตัวกว้างขวาง",
      b2_f2d: "สะดวกหากขับรถมาจากอ่าวนางหรือตัวเมืองกระบี่",
      b2_f3: "บรรยากาศพระอาทิตย์ตก",
      b2_f3d: "มาช่วง 17:00–18:30 เพื่อชมแสงทองยามเย็น",
      b2_wa: "แชท WhatsApp (สาขา 2)",
      b2_map: "แผนที่ · สาขา 2 · อ่าวน้ำเมา ไสไทย",
      hours_label: "เวลาเปิดทำการ",
      hours_title: "เปิดทุกวัน · 11:00 – 22:30",
      reserve_label: "จองโต๊ะและสำรองที่นั่ง",
      reserve_b1_name: "Kodam Kitchen สาขา 1",
      reserve_b2_name: "Kodam Kitchen สาขา 2",
      email_label: "อีเมล",
      footer: "© KoDam Kitchen · อ่าวนาง และ อ่าวน้ำเมา กระบี่",
    },
    zh: {
      nav_menu: "菜单",
      nav_atmosphere: "氛围",
      nav_locations: "分店",
      nav_hours: "营业时间",
      hero_tagline: "美味佳肴、新鲜食材与舒适氛围",
      hero_cta: "选择分店",
      hero_headline: "美食美味 氛围舒适",
      about_hours: "每日营业 11:00 – 22:30",
      about_title: "KoDam Kitchen – 当地泰餐与海鲜的隐秘瑰宝",
      about_subtitle: "奥南海滩人气之选",
      about_p1:
        "隐藏在奥南市区后街的 Kodam Kitchen，是一家温馨的当地泰式餐厅。奥南有许多泰餐选择，但偶尔离开主街去发现这家隐秘小店，会是格外值得的体验。",
      about_p2:
        "Kodam Kitchen 提供正宗美味的泰式料理与舒适氛围。推荐尝尝虾仁炒河粉、热海鲜拼盘，或搭配泰式印度饼的马沙曼鸡肉咖喱；也可尝试泰式罗勒焗贻贝与蒜香炸红鲷等新鲜海鲜。",
      about_p3:
        "热情的工作人员会微笑迎接您。户外座位环绕绿意，仿佛置身丛林。环境安静放松，却也离海滩很近，餐后可散步海边，并以芒果糯米饭或椰汁香蕉等甜品收尾。",
      about_p4:
        "餐厅紧邻人气按摩店 Massage Corner。建议先享受放松按摩，再来 KoDam Kitchen 感受轻松惬意的用餐氛围。",
      menu_title: "推荐菜单",
      menu_subtitle: "Recommended Menu",
      menu_intro: "深受客人喜爱、反复回访的招牌泰餐与海鲜精选",
      menu_cta: "查看完整菜单",
      menu_page_title: "完整菜单",
      menu_page_subtitle: "本店全部菜品",
      menu_page_intro: "向下滑动查看全部泰餐与海鲜菜单。",
      menu_page_back: "← 返回首页",
      dish1_name: "酸汤鲈鱼",
      dish1_en: "Sour Curry with Sea Bass",
      dish1_desc: "南泰风味酸辣汤，配嫩滑鲈鱼与竹笋，汤底香浓开胃。",
      dish2_name: "古法炸鱼",
      dish2_en: "Ancient Fried Fish",
      dish2_desc: "整条酥炸鱼，铺满香茅、红葱、辣椒与新鲜香草，酱汁鲜香开胃。",
      dish3_name: "马林德叶炒蛋",
      dish3_en: "Stir-fried Malindjo Leaves with Egg",
      dish3_desc: "南泰经典——翠绿马林德叶炒鲜蛋，配香脆蒜末。",
      dish4_name: "菠萝炒饭",
      dish4_en: "Pineapple Fried Rice",
      dish4_desc: "姜黄香炒饭搭配大虾、腊肠与腰果，盛在新鲜菠萝中呈现。",
      dish5_name: "椰青海鲜蒸咖喱",
      dish5_en: "Steamed Seafood Curry in Young Coconut",
      dish5_desc: "浓郁海鲜咖喱在嫩椰中蒸制，椰香清新，点缀柠檬叶与椰浆。",
      dish6_name: "虾酱辣椒酱",
      dish6_en: "Shrimp Paste Chili Dip",
      dish6_desc: "经典辛香虾酱蘸料，配金合欢叶煎蛋、炸蔬菜与新鲜黄瓜。",
      atm_title: "餐厅氛围",
      atm_subtitle: "Our Atmosphere",
      atm_intro:
        "两家分店，两种心情——市中心绿意隐秘角落，与海边海景用餐。点击照片可放大查看。",
      atm_b1_label: "分店 01 · 奥南市区",
      atm_b1_title: "Kodam Kitchen 分店 1",
      atm_b2_label: "分店 02 · 海景滨海",
      atm_b2_title: "Kodam Kitchen 分店 2 Oceanview",
      loc_label: "我们的位置",
      loc_title: "欢迎来到 KoDam Kitchen",
      loc_intro: "两种截然不同的氛围——轻松选择最适合今晚的用餐体验。",
      b1_label: "奥南市区",
      b1_title: "KoDam Kitchen 分店 1",
      b1_sub: "（奥南市区）",
      b1_desc:
        "坐落于 Khlong Hang 路的隐秘小店，靠近市场、绿意环绕，深受想探索奥南非海滩街区的旅客喜爱。",
      b1_f1: "无停车场",
      b1_f1d: "建议乘坐嘟嘟车、Grab 或从市区步行前来。",
      b1_f2: "深受国际游客欢迎",
      b1_f2d: "以实惠价格品尝正宗泰餐的知名去处。",
      b1_f3: "绿意丛林氛围",
      b1_f3d: "户外座位环绕盆栽绿植，巷弄安静惬意。",
      b1_wa: "WhatsApp 咨询（分店 1）",
      b1_map: "地图 · 分店 1 · Khlong Hang Rd, Ao Nang",
      b2_label: "Ao Nam Mao · 海滨",
      b2_title: "KoDam Kitchen 分店 2",
      b2_sub: "（海景与滨海）",
      b2_desc:
        "前往莱利码头途中的海景用餐——海风、开放露台，以及更浪漫的黄昏时光。",
      b2_f1: "海景视野",
      b2_f1d: "户外座位可俯瞰 Ao Nam Mao 海湾。",
      b2_f2: "宽敞私人停车场",
      b2_f2d: "从奥南或甲米市区自驾前来十分方便。",
      b2_f3: "浪漫日落氛围",
      b2_f3d: "建议 17:00–18:30 到店，欣赏金色黄昏。",
      b2_wa: "WhatsApp 咨询（分店 2）",
      b2_map: "地图 · 分店 2 · Ao Nam Mao, Sai Thai",
      hours_label: "营业时间",
      hours_title: "每日营业 · 11:00 – 22:30",
      reserve_label: "预订与订位",
      reserve_b1_name: "Kodam Kitchen 分店 1",
      reserve_b2_name: "Kodam Kitchen 分店 2",
      email_label: "邮箱",
      footer: "© KoDam Kitchen · 奥南 & Ao Nam Mao，甲米",
    },
  };

  const htmlLang = { en: "en", th: "th", zh: "zh-CN" };

  function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = htmlLang[lang] || "en";
    document.documentElement.setAttribute("data-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.dataset.lang === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });

    try {
      localStorage.setItem("kodam-lang-v2", lang);
    } catch (_) {}
  }

  function init() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });

    // Default language is always Thai for first visit / fresh preference key
    let saved = "th";
    try {
      saved = localStorage.getItem("kodam-lang-v2") || "th";
    } catch (_) {}
    if (!translations[saved]) saved = "th";
    applyLanguage(saved);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
