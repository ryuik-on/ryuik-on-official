
const header = document.getElementById("siteHeader");
const hero = document.querySelector(".hero");
const menuButton = document.getElementById("menuButton");
const mobileNav = document.getElementById("mobileNav");
const modal = document.getElementById("mediaModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

const heroObserver = new IntersectionObserver(([entry]) => {
  header.classList.toggle("is-visible", !entry.isIntersecting);
}, { threshold: 0.05 });
heroObserver.observe(hero);

menuButton.addEventListener("click", () => {
  const open = mobileNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
});
mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mobileNav.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}));

const navLinks = [...document.querySelectorAll('.desktop-nav a[href^="#"]')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`));
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
sections.forEach(section => sectionObserver.observe(section));

const seasons = {
  apr: [
    { name: "新歓ライブ", meta: "APR–MAY / LIVE", img: "./assets/live-wide.jpg" },
    { name: "九山", meta: "MAY / EVENT", img: "./assets/venue.jpg" },
    { name: "3年生主催ライブ", meta: "JUN / LIVE", img: "./assets/crowd.jpg" }
  ],
  jul: [
    { name: "合宿", meta: "JUL / 津堅島", img: "./assets/camp.jpg" },
    { name: "アルバム撮影", meta: "JUL / PHOTO", img: "./assets/venue.jpg" },
    { name: "琉大祭", meta: "SEP / 千原キャンパス", img: "./assets/crowd.jpg" }
  ],
  oct: [
    { name: "ハロウィンライブ", meta: "OCT / 部室", img: "./assets/keyboard.jpg" },
    { name: "ONE-MAN LIVE ROOM", meta: "NOV / テンブスホール", img: "./assets/venue.jpg" },
    { name: "クリスマスライブ", meta: "DEC / LIVE", img: "./assets/live-wide.jpg" }
  ],
  jan: [
    { name: "新年会ライブ", meta: "JAN / LIVE", img: "./assets/live-wide.jpg" },
    { name: "OBOGライブ・五大祭", meta: "FEB / LIVE", img: "./assets/crowd.jpg" },
    { name: "留送会ライブ", meta: "MAR / LIVE", img: "./assets/venue.jpg" }
  ]
};
const seasonGrid = document.getElementById("seasonGrid");
function renderSeason(key) {
  seasonGrid.innerHTML = seasons[key].map(item => `
    <article class="season-card">
      <img src="${item.img}" alt="">
      <h3>${item.name}</h3>
      <p>${item.meta}</p>
    </article>
  `).join("");
}
renderSeason("apr");
document.querySelectorAll(".season-tabs button").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".season-tabs button").forEach(other => other.setAttribute("aria-selected", "false"));
  btn.setAttribute("aria-selected", "true");
  renderSeason(btn.dataset.season);
}));

function openImage(src, caption) {
  modalBody.innerHTML = `<figure style="margin:0"><img src="${src}" alt=""><figcaption style="padding:14px 20px;color:#aaa;font-size:12px">${caption || ""}</figcaption></figure>`;
  modal.showModal();
}
document.querySelectorAll(".gallery-item").forEach(item => item.addEventListener("click", () => {
  openImage(item.dataset.src, item.dataset.caption);
}));

document.getElementById("movieButton").addEventListener("click", () => {
  modalBody.innerHTML = `
    <div class="movie-placeholder">
      <h2>MOVIE</h2>
      <p>動画URLまたはMP4ファイルを接続すると、<br>ここでサイト内再生されます。</p>
      <p style="font-size:12px">script.js の movieButton 処理を差し替えてください。</p>
    </div>`;
  modal.showModal();
});
modalClose.addEventListener("click", () => modal.close());
modal.addEventListener("click", e => { if (e.target === modal) modal.close(); });

document.getElementById("galleryMore").addEventListener("click", () => {
  document.getElementById("gallery").scrollIntoView({ behavior: "smooth", block: "start" });
});
