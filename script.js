// LOADING SCREEN
const loader = document.getElementById("loader");
function hideLoader() { if (loader) loader.classList.add("hide"); }

// Hide after the page loads (waits 1.4s so the bar finishes)
if (document.readyState === "complete") setTimeout(hideLoader, 1400);
else window.addEventListener("load", () => setTimeout(hideLoader, 1400));

// Safety fallback: always hide after 4 seconds, even if something breaks
setTimeout(hideLoader, 4000);
// RANDOM LOADING PHRASE
const quotes = [
  "Welcome to my corner of the internet.",
  "Built one step at a time.",
  "Still learning, still building.",
  "Loading the good stuff...",
  "Small steps, big progress.",
  "Making something from nothing.",
  "Almost there."
];
const quoteBox = document.getElementById("loaderQuote");
if (quoteBox) quoteBox.textContent = quotes[Math.floor(Math.random() * quotes.length)];
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll("#navLinks a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
