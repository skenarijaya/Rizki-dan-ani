const params = new URLSearchParams(location.search);
const recipient = params.get("to");
if (recipient) {
  const safeName = recipient.replace(/[<>]/g, "").slice(0, 100);
  document.getElementById("guestNameCover").textContent = safeName;
  document.getElementById("rsvpName").value = safeName;
}

const opening = document.getElementById("opening");
const mainContent = document.getElementById("mainContent");
const music = document.getElementById("weddingMusic");
const musicToggle = document.getElementById("musicToggle");

document.getElementById("openInvitation").addEventListener("click", async () => {
  opening.classList.add("closed");
  mainContent.classList.remove("locked");
  document.body.style.overflow = "";
  try {
    await music.play();
    musicToggle.classList.add("playing");
    musicToggle.setAttribute("aria-label", "Jeda musik");
  } catch (e) {
    // Browser may block playback; visitor can use the music button.
  }
  setTimeout(() => opening.remove(), 1000);
});

musicToggle.addEventListener("click", async () => {
  if (music.paused) {
    try {
      await music.play();
      musicToggle.classList.add("playing");
      musicToggle.setAttribute("aria-label", "Jeda musik");
    } catch (e) { showToast("Tambahkan file musik di assets/music.mp3"); }
  } else {
    music.pause();
    musicToggle.classList.remove("playing");
    musicToggle.setAttribute("aria-label", "Putar musik");
  }
});
music.addEventListener("ended", () => musicToggle.classList.remove("playing"));

const target = new Date("2026-11-22T09:00:00+07:00").getTime();
function updateCountdown() {
  let distance = target - Date.now();
  if (distance < 0) distance = 0;
  const values = {
    days: Math.floor(distance / 86400000),
    hours: Math.floor(distance / 3600000) % 24,
    minutes: Math.floor(distance / 60000) % 60,
    seconds: Math.floor(distance / 1000) % 60
  };
  Object.entries(values).forEach(([key, value]) => {
    document.getElementById(key).textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12, rootMargin: "0px 0px -35px 0px"});
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () => {
  backTop.classList.toggle("show", window.scrollY > 600);
}, {passive:true});
backTop.addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
document.querySelectorAll(".gallery-item").forEach(item => {
  item.addEventListener("click", () => {
    lightboxImage.src = item.dataset.full;
    lightbox.classList.add("show");
  });
});
function closeLightbox(){ lightbox.classList.remove("show"); lightboxImage.src = ""; }
document.getElementById("closeLightbox").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => { if(e.target === lightbox) closeLightbox(); });
document.addEventListener("keydown", e => { if(e.key === "Escape") closeLightbox(); });

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}
document.querySelectorAll(".copy-btn").forEach(button => {
  button.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(button.dataset.copy);
      showToast("Nomor berhasil disalin");
    } catch(e) { showToast("Tidak dapat menyalin otomatis"); }
  });
});

// RSVP demo uses localStorage in this browser only.
// Connect a server/database (e.g. Supabase) for real multi-device submissions.
const form = document.getElementById("rsvpForm");
const wishList = document.getElementById("wishList");
function getWishes() {
  try { return JSON.parse(localStorage.getItem("javaMaroonWishes") || "[]"); }
  catch(e) { return []; }
}
function renderWishes() {
  const wishes = getWishes();
  wishList.innerHTML = "";
  wishes.slice().reverse().forEach(wish => {
    const article = document.createElement("article");
    article.className = "wish";
    const name = document.createElement("strong");
    name.textContent = wish.name + " · " + wish.attendance;
    const message = document.createElement("p");
    message.textContent = wish.message || "Mengirimkan doa terbaik.";
    article.append(name, message);
    wishList.appendChild(article);
  });
}
renderWishes();
form.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  const entry = {
    name: String(data.get("name") || "").trim(),
    attendance: String(data.get("attendance") || ""),
    guests: String(data.get("guests") || "1"),
    message: String(data.get("message") || "").trim().slice(0,500)
  };
  if (!entry.name || !entry.attendance) return showToast("Lengkapi nama dan konfirmasi kehadiran.");
  const wishes = getWishes();
  wishes.push(entry);
  localStorage.setItem("javaMaroonWishes", JSON.stringify(wishes));
  form.reset();
  renderWishes();
  showToast("Terima kasih! Konfirmasi tersimpan di perangkat ini.");
});
