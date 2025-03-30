const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// Função para mudar o tema
function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme") || "dark";
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  rootHtml.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);

  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");
}

// Verifica e aplica o tema salvo no localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  rootHtml.setAttribute("data-theme", savedTheme);

  if (savedTheme === "light") {
    toggleTheme.classList.add("bi-sun");
    toggleTheme.classList.remove("bi-moon-stars");
  } else {
    toggleTheme.classList.add("bi-moon-stars");
    toggleTheme.classList.remove("bi-sun");
  }
}

// Evento de clique para mudar o tema
toggleTheme.addEventListener("click", changeTheme);

// Carregar tema ao iniciar
loadTheme();

// Toggle no menu
menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Toggle nos acordes (accordion)
accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    header.parentElement.classList.toggle("active");
  });
});
