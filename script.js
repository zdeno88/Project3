const nav = document.querySelector("nav");
const icon = document.querySelector("i");

icon.addEventListener("click", () => {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
    nav.style.display = "block";
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
    nav.style.display = "none";
  }
});
