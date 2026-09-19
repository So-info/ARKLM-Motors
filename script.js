document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav nav");

  // Menu mobile
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const open = nav.classList.toggle("open");

      menu.setAttribute("aria-expanded", String(open));

      menu.querySelectorAll("span").forEach((span, index) => {
        if (open) {
          span.style.transform =
            index === 1
              ? "scaleX(0)"
              : index === 0
              ? "translateY(7px) rotate(45deg)"
              : "translateY(-7px) rotate(-45deg)";
        } else {
          span.style.transform = "";
        }
      });
    });

    // Fermer le menu après avoir choisi une page
    nav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        menu.setAttribute("aria-expanded", "false");

        menu.querySelectorAll("span").forEach(span => {
          span.style.transform = "";
        });
      });
    });
  }

  // Année automatique dans le footer
  document.querySelectorAll("#year").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // Animations d'apparition
  const elements = document.querySelectorAll(
    ".service-card,.stat-grid>div,.about-copy,.about-points>div,.location-copy,.garage-photo,.hours,.rental,.price-list article,.mechanic-grid article,.steps div,.values div,.contact-card"
  );

  elements.forEach(el => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach(el => observer.observe(el));
  }

  // Barre de progression
  const progress = document.createElement("div");
  progress.className = "scroll-progress";
  document.body.appendChild(progress);

  window.addEventListener("scroll", () => {
    const height =
      document.documentElement.scrollHeight - window.innerHeight;

    progress.style.width =
      (height ? window.scrollY / height * 100 : 0) + "%";
  }, { passive: true });

  // Défilement doux des ancres
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
      const target = document.querySelector(
        link.getAttribute("href")
      );

      if (target) {
        event.preventDefault();
        target.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });
});