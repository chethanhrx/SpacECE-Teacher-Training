// SpacECE premium landing interactions

const body = document.body;
const header = document.getElementById("siteHeader");
const progress = document.getElementById("scrollProgress");
const loader = document.getElementById("pageLoader");
const backToTopBtn = document.getElementById("backToTop");
const menuBtn = document.getElementById("menuBtn");
const mainNav = document.getElementById("mainNav");
const sections = [...document.querySelectorAll("main .section")];
const dotsWrap = document.getElementById("sectionDots");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 650);
});

// Dynamic year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

// Header and progress
function updateScrollUI() {
  const top = window.scrollY;
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const percent = h > 0 ? (top / h) * 100 : 0;

  progress.style.width = `${percent}%`;
  header.classList.toggle("scrolled", top > 32);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

// Back-to-top visibility and interaction
window.addEventListener('scroll', () => {
  if (!backToTopBtn) return;
  backToTopBtn.classList.toggle('show', window.scrollY > 560);
});
backToTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Mobile nav
menuBtn?.addEventListener("click", () => {
  const open = mainNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.16 }
);
revealEls.forEach((el) => revealObserver.observe(el));

// Section dots and active nav
const dots = [];
sections.forEach((section, i) => {
  const dot = document.createElement("button");
  dot.setAttribute("aria-label", section.dataset.section || `Section ${i + 1}`);
  dot.addEventListener("click", () => section.scrollIntoView({ behavior: "smooth", block: "start" }));
  dotsWrap?.appendChild(dot);
  dots.push(dot);
});

const navLinks = [...document.querySelectorAll(".main-nav a")].filter((link) => link.getAttribute("href")?.startsWith("#"));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const id = entry.target.id;
      dots.forEach((dot, idx) => dot.classList.toggle("active", sections[idx].id === id));
      navLinks.forEach((link) => {
        const linkId = link.getAttribute("href")?.slice(1);
        link.classList.toggle("active", linkId === id);
      });
    });
  },
  { threshold: 0.55 }
);
sections.forEach((section) => sectionObserver.observe(section));

// Counters
const counters = document.querySelectorAll("[data-counter]");
const countObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.getAttribute("data-counter") || 0);
      const suffix = target === 100 ? "%" : "+";
      let current = 0;
      const step = Math.max(1, Math.round(target / 45));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = `${current}${suffix}`;
      }, 22);
      observer.unobserve(el);
    });
  },
  { threshold: 0.45 }
);
counters.forEach((counter) => countObserver.observe(counter));

// Parallax hero
const hero = document.getElementById("hero");
const rays = document.querySelector(".hero-rays");
window.addEventListener(
  "scroll",
  () => {
    if (!hero || !rays) return;
    const rect = hero.getBoundingClientRect();
    const progressY = Math.max(-1, Math.min(1, rect.top / window.innerHeight));
    rays.style.transform = `translateY(${progressY * -28}px) rotate(${progressY * -8}deg)`;
  },
  { passive: true }
);

// Tilt cards
function bindTilt(el) {
  el.addEventListener("mousemove", (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    const rx = (0.5 - y) * 8;
    const ry = (x - 0.5) * 10;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });
  el.addEventListener("mouseleave", () => {
    el.style.transform = "";
  });
}
document.querySelectorAll(".tilt").forEach(bindTilt);

// Magnetic buttons
function bindMagnetic(btn) {
  btn.addEventListener("mousemove", (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.16}px, ${y * 0.22}px)`;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "";
  });
}
document.querySelectorAll(".magnetic").forEach(bindMagnetic);

// Ripple effect
function bindRipple(btn) {
  btn.addEventListener("click", (e) => {
    const d = document.createElement("span");
    d.className = "ripple-dot";
    d.style.left = `${e.offsetX}px`;
    d.style.top = `${e.offsetY}px`;
    btn.appendChild(d);
    setTimeout(() => d.remove(), 650);
  });
}
document.querySelectorAll(".ripple").forEach(bindRipple);

// Accordion
const accButtons = document.querySelectorAll(".accordion-item, .timeline-item");
accButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const panel = btn.nextElementSibling;
    const isOpen = btn.classList.contains("active");

    accButtons.forEach((b) => {
      b.classList.remove("active");
      b.nextElementSibling?.classList.remove("open");
    });

    if (!isOpen) {
      btn.classList.add("active");
      panel?.classList.add("open");
    }
  });
});

// Testimonials slider
const slidesTrack = document.getElementById("slidesTrack");
const nextSlide = document.getElementById("nextSlide");
const prevSlide = document.getElementById("prevSlide");
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

function renderSlide() {
  if (!slidesTrack) return;
  slidesTrack.style.transform = `translateX(-${slideIndex * 100}%)`;
}

nextSlide?.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % slides.length;
  renderSlide();
});

prevSlide?.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  renderSlide();
});

setInterval(() => {
  if (!slides.length) return;
  slideIndex = (slideIndex + 1) % slides.length;
  renderSlide();
}, 5000);

// Particles canvas
const canvas = document.getElementById("particles");
const ctx = canvas?.getContext("2d");
let particles = [];
const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let enableParticles = !prefersReduced && window.innerWidth > 700;

function resizeCanvas() {
  if (!canvas) return;
  const ratio = window.devicePixelRatio || 1;
  canvas.width = canvas.clientWidth * ratio;
  canvas.height = canvas.clientHeight * ratio;
  ctx?.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function seedParticles() {
  if (!canvas || !enableParticles) return;
  // reduce count on small widths to improve performance
  const base = Math.max(18, Math.floor(canvas.clientWidth / 48));
  const count = Math.min(80, base);
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.clientWidth,
    y: Math.random() * canvas.clientHeight,
    r: Math.random() * 1.6 + 0.3,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35
  }));
}

function drawParticles() {
  if (!canvas || !ctx || !enableParticles) return;
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.clientWidth) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.clientHeight) p.vy *= -1;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 216, 140, 0.5)";
    ctx.fill();
  });

  requestAnimationFrame(drawParticles);
}

if (canvas && ctx && enableParticles) {
  resizeCanvas();
  seedParticles();
  drawParticles();
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      enableParticles = !prefersReduced && window.innerWidth > 700;
      resizeCanvas();
      seedParticles();
    }, 220);
  });
}

// Form submit
const form = document.getElementById("registerForm");
const submitBtn = document.getElementById("submitBtn");
form?.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!submitBtn) return;
  submitBtn.textContent = "Submitted Successfully";
  submitBtn.style.background = "linear-gradient(130deg, #4fc67a, #82e59b)";
  submitBtn.disabled = true;

  setTimeout(() => {
    form.reset();
    submitBtn.textContent = "Submit Application";
    submitBtn.style.background = "";
    submitBtn.disabled = false;
  }, 2500);
});