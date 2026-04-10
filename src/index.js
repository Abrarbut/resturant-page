import { loadHome } from "./pages/home.js";
import { loadMenu } from "./pages/menu.js";
import { loadAbout } from "./pages/about.js";
import { loadContact } from "./pages/contact.js";
import "./styles.css";

const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("homeBtn");
const menuBtn = document.getElementById("menuBtn");
const aboutBtn = document.getElementById("aboutBtn");
const contactBtn = document.getElementById("contactBtn");

function clearActive() {
  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });
}

function setActive(btn) {
  clearActive();
  btn.classList.add("active");
}

homeBtn.addEventListener("click", () => {
  setActive(homeBtn);
  contentDiv.innerHTML = "";
  loadHome();
});

menuBtn.addEventListener("click", () => {
  setActive(menuBtn);
  contentDiv.innerHTML = "";
  loadMenu();
});

aboutBtn.addEventListener("click", () => {
  setActive(aboutBtn);
  contentDiv.innerHTML = "";
  loadAbout();
});

contactBtn.addEventListener("click", () => {
  setActive(contactBtn);
  contentDiv.innerHTML = "";
  loadContact();
});

// Load home page on initial load
loadHome();

console.log("Restaurant page loaded successfully!");