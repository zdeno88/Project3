const nav = document.querySelector("nav");
const icon = document.querySelector(".menu-icon i");
const switcher = document.querySelector(".switch input");
const mode = document.querySelector(".switcher-description p");
const modeIcone = document.querySelector(".switcher-description i");

const changeClass = (removeClass, addClass, elemnt) => {
  elemnt.classList.remove(removeClass);
  elemnt.classList.add(addClass);
};

icon.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    changeClass("fa-bars", "fa-xmark", icon);
    nav.style.display = "block";
  } else {
    changeClass("fa-xmark", "fa-bars", icon);
    nav.style.display = "none";
  }
});

switcher.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    mode.textContent = "Dark mode";
    changeClass("fa-sun", "fa-moon", modeIcone);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    mode.textContent = "Light mode";
    changeClass("fa-moon", "fa-sun", modeIcone);
  }
});
