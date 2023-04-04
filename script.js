const darkModeToggle = document.querySelector("#dark-mode-toggle");
const root = document.documentElement;

darkModeToggle.addEventListener("click", () => {
  root.classList.toggle("dark-mode");
});
