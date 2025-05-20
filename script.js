function toggleLang() {
  const lang = document.documentElement.lang;
  if (lang === "fa") {
    window.location.href = "index-en.html";
  } else {
    window.location.href = "index.html";
  }
}