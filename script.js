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
  “Move quietly. Build honestly. Let time speak.”,
  “One day, the life I'm quietly working toward will feel like home.”,
  "You won't always hear about what I'm going through or see what I'm building.",
  "Built one step at a time.",
  "Temporarily unavailable. Permanently minding my business.",
  "Still learning, still building.",
  "Loading the good stuff...",
  "Some things are meant to grow in private.",
  "I’m around, just not available.",
  "Noise.𓆩🖤𓆪”,
  "Quietly living, quietly growing. I'll be back.",
  "Small steps, big progress.",
  "Making something from nothing.",
"You might see me online, but that doesn't mean I'm available.",
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
