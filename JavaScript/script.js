// -------------------------scroll to top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.querySelector(".progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  console.log(pos);

  if (pos > 100) {
    scrollProgress.style.display = "flex";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#254083 ${scrollValue}% , #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// ------------------------------sidebar menu
let navbar = document.querySelector(".dropdown-menu");
let menu = document.querySelector(".menu-icon");
let closebtn = document.querySelector(".close-icon");

menu.onclick = () => {
  menu.classList.toggle(".menu-icon");
  navbar.classList.toggle("open");
};

closebtn.onclick = () => {
  menu.classList.toggle(".menu-icon");
  navbar.classList.toggle("open");
};
// ---------------------------------ShowHidepass
const pass = document.getElementById("password-input");
const togg = document.getElementById("toggle");
const passrepeat = document.getElementById("repeat");
const toggrepeat = document.getElementById("toggle-repeat");
const eye = document.querySelector("#eyeIcon");
const eyerepeat = document.querySelector("#eyeIcon-repeat");

function ShowHidepass() {
  if (pass.type === "password") {
    pass.setAttribute("type", "text");
    togg.classList.add("hide");
    togg.style.color = "#404040";
    eye.innerHTML = '<i class="fa-solid fa-eye"></i>';
  } else {
    pass.setAttribute("type", "password");
    togg.classList.remove("hide");
    togg.style.color = "#005b7f";
    eye.innerHTML = '<i class="fa-solid fa-eye fa-eye-slash"></i>';
  }
}

function ShowHideRepeatpass() {
  if (passrepeat.type === "password") {
    passrepeat.setAttribute("type", "text");
    toggrepeat.classList.add("hide");
    toggrepeat.style.color = "#404040";
    eyerepeat.innerHTML = '<i class="fa-solid fa-eye"></i>';
  } else {
    toggrepeat.style.color = "#005b7f";
    passrepeat.setAttribute("type", "password");
    toggrepeat.classList.remove("hide");
    eyerepeat.innerHTML = '<i class="fa-solid fa-eye fa-eye-slash"></i>';
  }
}
//------------------------- Animated Tabs
const contents = document.querySelectorAll(".content");
const tabs = document.querySelectorAll(".options li");
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    contents.forEach((cont) => cont.classList.remove("active"));
    contents[index].classList.add("active");
  });
});

// --------------------------faq accordion
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faqs.forEach((event) => event.classList.remove("active"));
    faq.classList.add("active");
  });
});
