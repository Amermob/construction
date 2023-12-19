const languageSelector = document.querySelector("select");
languageSelector.addEventListener("change", (event) => {
  setLanguage(event.target.value);
  localStorage.setItem("lang", event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
  const language = localStorage.getItem("lang") || "en";
  setLanguage(language);
});

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-i18n");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

const translations = {
  en: {
    whoWeAre: "Who we are?",
    our: "our services",
    pic: "Gallery",
    contact: "contact us",
    arabic: "arabic",
    english: "english",
    summery:
      "We, Sabahat Al-Eid Contracting Establishment, are honored to carry out demolition work with the help of a specialized and experienced team in demolition work taking the highest safety measures and not damaging the buildings adjacent to the demolition work. We provide a waste assessment that is competitive with the market.",
    whatWeDo:
      "We provide logistical services that accompany the demolition work in transporting waste and supervising the work in a distinguished manner, taking into account those neighboring buildings with experienced team that strives for the best",
    location: "Suhayb Ibn Sinan, Aluraija Al Gharbiyah, Riyadh 14913",
  },
  ar: {
    whoWeAre: "من نحن؟",
    our: "خدماتنا",
    pic: "معرض الصور",
    contact: "للتواصل",
    arabic: "العربية",
    english: "English",
    summery:
      "نتشرف نحن مؤسسة صباحات العيد للمقاولات بالقيام باعمال الهدم و لدينا فريق متخصص و ذو خبره في اعمال الهدم واخذ اعلى وسائل السلامه و عدم الاضرار بالمباني المجاوره لاعمال الهدم باحترافيه نقدم تقييم للمخلفات منافس عن السوق نتشرف بتواصلكم 0555931369 واتس اب او اتصال كما لدينا المعدات الممكنة لانجاز العمل بأسرع وقت نفخر بانجازتنا بعد رضاكم عن اعمالنا ",
    whatWeDo:
      "نقدم خدمات لوجستيه تواكب أعمال الهدم في ترحيل المخلفات و أعمال الأشراف على العمل بطريقة متميزة مع مراعاة من يجاور منطقة العمل  بفريق متميز في العمل",
    location: "صهيب بن سيناء، العريجة الغربية، الرياض",
  },
};
