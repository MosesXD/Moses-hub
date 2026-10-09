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

// ---------- Now playing (Last.fm) ----------
// Asks our Netlify Function what you're listening to. The function holds the
// secret key, so no key ever appears in this file.
const nowPlayingEl = document.getElementById("nowPlaying");
const nowPlayingLabel = document.getElementById("nowPlayingLabel");

// Only runs on pages that have the "nowPlaying" element (the About page)
if (nowPlayingEl && nowPlayingLabel) {
  fetch("/.netlify/functions/now-playing")
    .then(response => (response.ok ? response.json() : Promise.reject()))
    .then(data => {
      if (!data.track) return; // nothing to show, so keep the default text
      nowPlayingLabel.textContent = data.playing ? "Listening now" : "Last played";
      // textContent (not innerHTML) keeps odd characters in song names safe
      nowPlayingEl.textContent = data.track + " – " + data.artist;
    })
    .catch(() => {
      // If anything goes wrong, the page just keeps the text written in the HTML
    });
}
