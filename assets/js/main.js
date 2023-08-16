const url = "https://api.github.com/users/Heber-Stavrakas-Gaipo";
const e = (error) => console.error(error);

function getProjectName() {
  axios
    .get(`${url}/repos`)
    .then((response) => {
      project1Name.textContent = response.data[1].name;
    })
    .catch(e);
}
getProjectName();

function getDescription() {
  axios
    .get(`${url}/repos`)
    .then((response) => {
      project1Dsc.textContent = response.data[1].description;
    })
    .catch(e);
}
getDescription();

function getGithubUserName() {
  axios
    .get(url)
    .then((response) => {
      githubUserName.textContent = response.data.login;
    })
    .catch(e);
}
getGithubUserName();

function getStars() {
  axios
    .get(`${url}/repos`)
    .then((response) => {
      project1Stars.textContent = response.data[1].stargazers_count;
    })
    .catch(e);
}
getStars();

function getForks() {
  axios
    .get(`${url}/repos`)
    .then((response) => {
      project1Forks.textContent = response.data[1].forks;
    })
    .catch(e);
}
getForks();

function getLanguage() {
  axios
    .get(`${url}/repos`)
    .then((response) => {
      project1Language.textContent = response.data[1].language;
    })
    .catch(e);
}
getLanguage();

// function to set a given theme/color-scheme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem("theme") === "theme-light") {
    document
      .querySelector("#switch")
      .setAttribute("title", "Alterar para tema claro");
    setTheme("theme-default");
  } else {
    document
      .querySelector("#switch")
      .setAttribute("title", "Alterar para tema escuro");
    setTheme("theme-light");
  }
}

// Immediately invoked function to set the theme on initial load
document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("theme") === "theme-default") {
    setTheme("theme-default");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }

  // Add event listener to the theme switcher button
  document.querySelector("#switch").addEventListener("click", toggleTheme);
});

window.addEventListener("load", function () {
  // Quando a página estiver completamente carregada, oculta a tela de loading com transição suave
  const loadingScreen = document.getElementById("loadingScreen");
  loadingScreen.style.opacity = 0; // Definimos a opacidade para 0 (completamente transparente)

  // Aguarda um pequeno intervalo antes de remover a tela de loading
  setTimeout(function () {
    loadingScreen.style.display = "none";
  }, 300); // A transição tem duração de 0.3 segundos (300 milissegundos)
});
