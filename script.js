const nav = document.querySelector("nav");
const icon = document.querySelector(".menu-icon i");
const switcher = document.querySelector(".switch input");
const mode = document.querySelector(".switcher-description p");
const modeIcone = document.querySelector(".switcher-description i");
const arrow = document.querySelector("arrow");
const buildingsMenu = document.querySelector(".li-buildings");
const buildings = document.querySelector("#buildings");
const formMenu = document.querySelector(".li-form");
const form = document.querySelector("#form");
const email = document.querySelector(".email");
const heslo1 = document.querySelector(".heslo1");
const heslo2 = document.querySelector(".heslo2");
const textPassword = document.querySelector(".textPassword");
const textPasswordCheck = document.querySelector(
  ".textPasswordDiv .fa-regular"
);
const textEmail = document.querySelector(".textEmail");
const textEmailCheck = document.querySelector(".textEmailDiv .fa-regular");

const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const buildingsConst = buildings.offsetTop - 70;
const formConst = form.offsetTop - 70;

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

window.addEventListener("scroll", () => {
  if (window.scrollY >= 20) {
    arrow.style.visibility = "visible";
  } else {
    arrow.style.visibility = "hidden";
  }
});

arrow.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

buildingsMenu.addEventListener("click", () => {
  window.scrollTo({ top: buildingsConst, behavior: "smooth" });
});

formMenu.addEventListener("click", () => {
  window.scrollTo({ top: formConst, behavior: "smooth" });
});

const checkCorrection = (textClass, text, imgClass, addClass, removeClass) => {
  textClass.textContent = text + " correct";
  imgClass.classList.add(addClass);
  imgClass.classList.remove(removeClass);
};

heslo2.addEventListener("input", () => {
  if (heslo1.value === heslo2.value) {
    checkCorrection(
      textPassword,
      "Password",
      textPasswordCheck,
      "fa-circle-check",
      "fa-circle-xmark"
    );
  } else {
    checkCorrection(
      textPassword,
      "Password",
      textPasswordCheck,
      "fa-circle-xmark",
      "fa-circle-check"
    );
  }
});

email.addEventListener("input", () => {
  const emailInput = email.value;

  if (emailInput.match(pattern)) {
    checkCorrection(
      textEmail,
      "Email",
      textEmailCheck,
      "fa-circle-check",
      "fa-circle-xmark"
    );
  } else {
    checkCorrection(
      textEmail,
      "Email",
      textEmailCheck,
      "fa-circle-xmark",
      "fa-circle-check"
    );
  }
});
