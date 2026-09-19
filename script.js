document.addEventListener("DOMContentLoaded", function () {

  const menuButton = document.querySelector(".menu-toggle");

  if (!menuButton) return;

  let menuOpen = false;
  let mobileMenu = null;


  /* ==========================================
     OUVRIR LE MENU
     ========================================== */

  function ouvrirMenu() {

    if (mobileMenu) return;

    menuOpen = true;

    menuButton.setAttribute("aria-expanded", "true");


    /* Création du menu */

    mobileMenu = document.createElement("div");

    mobileMenu.id = "arklm-mobile-menu";


    mobileMenu.innerHTML = `
      <div class="arklm-menu-inner">

        <a href="index.html">ACCUEIL</a>

        <a href="tarifs.html">TARIFS</a>

        <a href="location.html">LOCATION</a>

        <a href="nettoyage.html">NETTOYAGE</a>

        <a href="mecanique.html">MÉCANIQUE</a>

        <a href="carrosserie.html">CARROSSERIE</a>

        <a href="apropos.html">À PROPOS</a>

        <a href="contact.html">CONTACT</a>

      </div>
    `;


    /* Style du menu */

    mobileMenu.style.cssText = `
      position: fixed !important;
      top: 66px !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;

      width: 100% !important;
      height: calc(100vh - 66px) !important;

      display: block !important;

      background: #050607 !important;

      z-index: 999999 !important;

      overflow-y: auto !important;

      box-sizing: border-box !important;
    `;


    /* Style intérieur */

    const inner = mobileMenu.querySelector(".arklm-menu-inner");

    inner.style.cssText = `
      width: 100% !important;
      box-sizing: border-box !important;

      display: flex !important;
      flex-direction: column !important;

      padding: 20px 25px 40px !important;
    `;


    /* Style des liens */

    mobileMenu.querySelectorAll("a").forEach(function (link) {

      link.style.cssText = `
        display: block !important;

        width: 100% !important;
        box-sizing: border-box !important;

        padding: 22px 10px !important;

        color: #ffffff !important;

        background: transparent !important;

        text-align: center !important;

        font-family: Arial, sans-serif !important;

        font-size: 14px !important;
        font-weight: 800 !important;

        letter-spacing: 2px !important;

        text-decoration: none !important;

        border-bottom: 1px solid #292e31 !important;
      `;


      link.addEventListener("click", function () {
        fermerMenu();
      });

    });


    document.body.appendChild(mobileMenu);


    /* Transformation ☰ → ✕ */

    const spans = menuButton.querySelectorAll("span");

    if (spans.length >= 3) {

      spans[0].style.transform =
        "translateY(7px) rotate(45deg)";

      spans[1].style.transform =
        "scaleX(0)";

      spans[2].style.transform =
        "translateY(-7px) rotate(-45deg)";
    }

  }


  /* ==========================================
     FERMER LE MENU
     ========================================== */

  function fermerMenu() {

    menuOpen = false;

    menuButton.setAttribute("aria-expanded", "false");


    if (mobileMenu) {

      mobileMenu.remove();

      mobileMenu = null;
    }


    /* ✕ → ☰ */

    const spans = menuButton.querySelectorAll("span");

    spans.forEach(function (span) {
      span.style.transform = "";
    });

  }


  /* ==========================================
     CLIC SUR LE BOUTON
     ========================================== */

  menuButton.addEventListener("click", function (event) {

    event.preventDefault();
    event.stopPropagation();


    if (menuOpen) {

      fermerMenu();

    } else {

      ouvrirMenu();

    }

  });


  /* ==========================================
     ANNÉE DU FOOTER
     ========================================== */

  document.querySelectorAll("#year").forEach(function (element) {

    element.textContent = new Date().getFullYear();

  });


  /* ==========================================
     SCROLL DOUX
     ========================================== */

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

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