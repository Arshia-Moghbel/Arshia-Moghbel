let currentLang = "fa";
let translations = {};

async function changeLang(lang) {
  const res = await fetch(`lang/${lang}.json`);
  translations = await res.json();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  currentLang = lang;
  translate();
}

function translate() {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[key]) el.innerText = translations[key];
  });
}

function toggleTheme() {
  if (document.body.classList.toggle("light")) {
    document.documentElement.style.setProperty("--bg", "#ffffff");
    document.documentElement.style.setProperty("--text", "#111111");
  } else {
    document.documentElement.style.setProperty("--bg", "#0a0a0a");
    document.documentElement.style.setProperty("--text", "#e0e0e0");
  }
}

// Load default language
changeLang(currentLang);