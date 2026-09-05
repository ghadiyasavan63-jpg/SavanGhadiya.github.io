const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");
menuBtn?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".navbar nav a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, {threshold: 0.12});

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const heroArt = document.querySelector(".hero-art");
window.addEventListener("mousemove", (e) => {
  if (!heroArt || window.innerWidth < 900) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 12;
  const y = (e.clientY / window.innerHeight - 0.5) * 12;
  heroArt.style.transform = `translate(${x}px, ${y}px)`;
});
