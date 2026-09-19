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

        <div class="arklm-menu-label">
          MENU · ARKLM MOTORS
        </div>

        <a href="index.html">
          <b>01</b>
          <span>ACCUEIL</span>
          <i>→</i>
        </a>

        <a href="tarifs.html">
          <b>02</b>
          <span>TARIFS</span>
          <i>→</i>
        </a>

        <a href="location.html">
          <b>03</b>
          <span>LOCATION</span>
          <i>→</i>
        </a>

        <a href="nettoyage.html">
          <b>04</b>
          <span>NETTOYAGE</span>
          <i>→</i>
        </a>

        <a href="mecanique.html">
          <b>05</b>
          <span>MÉCANIQUE</span>
          <i>→</i>
        </a>

        <a href="carrosserie.html">
          <b>06</b>
          <span>CARROSSERIE</span>
          <i>→</i>
        </a>

        <a href="apropos.html">
          <b>07</b>
          <span>À PROPOS</span>
          <i>→</i>
        </a>

        <a href="contact.html">
          <b>08</b>
          <span>CONTACT</span>
          <i>→</i>
        </a>


        <div class="arklm-menu-contact">

          <small>
            BESOIN D'UN SERVICE ?
          </small>

          <a href="tel:+33603957834">
            06 03 95 78 34
          </a>

          <span>
            ELNE · PYRÉNÉES-ORIENTALES
          </span>

        </div>


        <div class="arklm-menu-signature">
          QUALITÉ
          <em>•</em>
          CONFIANCE
          <em>•</em>
          SÉRÉNITÉ
        </div>

      </div>
    `;


    /* ==========================================
       STYLE DU MENU
       ========================================== */

    mobileMenu.style.cssText = `
      position: fixed !important;

      top: 66px !important;
      left: 0 !important;
      right: 0 !important;
      bottom: 0 !important;

      width: 100% !important;
      height: calc(100vh - 66px) !important;

      display: block !important;

      background:
        radial-gradient(
          circle at 88% 4%,
          rgba(255,31,52,.15),
          transparent 24%
        ),
        radial-gradient(
          circle at 0% 80%,
          rgba(255,31,52,.055),
          transparent 28%
        ),
        #050607 !important;

      z-index: 999999 !important;

      overflow-y: auto !important;

      box-sizing: border-box !important;

      opacity: 0;
      transform: translateY(-10px);

      transition:
        opacity .22s ease,
        transform .22s ease;
    `;


    /* ==========================================
       CONTENU DU MENU
       ========================================== */

    const inner =
      mobileMenu.querySelector(".arklm-menu-inner");

    inner.style.cssText = `
      width: 100% !important;

      min-height: 100% !important;

      box-sizing: border-box !important;

      display: flex !important;

      flex-direction: column !important;

      padding: 30px 24px 24px !important;
    `;


    /* ==========================================
       TITRE MENU
       ========================================== */

    const label =
      mobileMenu.querySelector(".arklm-menu-label");

    label.style.cssText = `
      color: #ff1f35 !important;

      font-family: Arial, sans-serif !important;

      font-size: 8px !important;

      font-weight: 900 !important;

      letter-spacing: 3px !important;

      margin: 0 0 14px !important;
    `;


    /* ==========================================
       LIENS
       ========================================== */

    mobileMenu
      .querySelectorAll(".arklm-menu-inner > a")
      .forEach(function (link) {

        link.style.cssText = `
          position: relative !important;

          display: flex !important;

          align-items: center !important;

          width: 100% !important;

          min-height: 53px !important;

          box-sizing: border-box !important;

          padding: 0 34px 0 42px !important;

          color: #ffffff !important;

          background: transparent !important;

          text-align: left !important;

          font-family: Arial, sans-serif !important;

          font-size: 16px !important;

          font-weight: 900 !important;

          letter-spacing: 1.8px !important;

          text-decoration: none !important;

          border-top: 1px solid #292e31 !important;

          transition:
            background .18s ease,
            color .18s ease,
            padding .18s ease !important;
        `;


        const number =
          link.querySelector("b");

        const text =
          link.querySelector("span");

        const arrow =
          link.querySelector("i");


        number.style.cssText = `
          position: absolute !important;

          left: 0 !important;

          color: #565d61 !important;

          font-family: Arial, sans-serif !important;

          font-size: 9px !important;

          font-weight: 900 !important;

          letter-spacing: 1px !important;
        `;


        text.style.cssText = `
          display: block !important;

          color: inherit !important;
        `;


        arrow.style.cssText = `
          position: absolute !important;

          right: 2px !important;

          color: #ff1f35 !important;

          font-style: normal !important;

          font-size: 16px !important;

          opacity: 0 !important;

          transform: translateX(-7px) !important;

          transition:
            opacity .18s ease,
            transform .18s ease !important;
        `;


        /* Survol */

        link.addEventListener(
          "mouseenter",
          function () {

            link.style.background =
              "rgba(255,255,255,.025)";

            link.style.paddingLeft = "49px";

            number.style.color =
              "#ff1f35";

            arrow.style.opacity = "1";

            arrow.style.transform =
              "translateX(0)";
          }
        );


        link.addEventListener(
          "mouseleave",
          function () {

            link.style.background =
              "transparent";

            link.style.paddingLeft =
              "42px";

            number.style.color =
              "#565d61";

            arrow.style.opacity = "0";

            arrow.style.transform =
              "translateX(-7px)";
          }
        );


        /* Fermeture après clic */

        link.addEventListener(
          "click",
          function () {
            fermerMenu();
          }
        );

      });


    /* Dernière ligne */

    const lastLink =
      mobileMenu.querySelector(
        ".arklm-menu-inner > a:last-of-type"
      );

    lastLink.style.borderBottom =
      "1px solid #292e31";


    /* ==========================================
       BLOC CONTACT
       ========================================== */

    const contact =
      mobileMenu.querySelector(
        ".arklm-menu-contact"
      );

    contact.style.cssText = `
      margin-top: auto !important;

      margin-bottom: 28px !important;

      padding: 14px 16px 13px !important;

      border-left: 2px solid #ff1f35 !important;

      background: rgba(255,255,255,.025) !important;
    `;


    const contactSmall =
      contact.querySelector("small");

    contactSmall.style.cssText = `
      display: block !important;

      color: #737a7e !important;

      font-family: Arial, sans-serif !important;

      font-size: 7px !important;

      font-weight: 900 !important;

      letter-spacing: 2px !important;

      margin-bottom: 7px !important;
    `;


    const contactPhone =
      contact.querySelector("a");

    contactPhone.style.cssText = `
      display: block !important;

      color: #ffffff !important;

      font-family: Arial, sans-serif !important;

      font-size: 23px !important;

      font-weight: 900 !important;

      letter-spacing: 1px !important;

      text-decoration: none !important;
    `;


    const contactPlace =
      contact.querySelector("span");

    contactPlace.style.cssText = `
      display: block !important;

      color: #62696d !important;

      font-family: Arial, sans-serif !important;

      font-size: 7px !important;

      font-weight: 700 !important;

      letter-spacing: 1px !important;

      margin-top: 6px !important;
    `;


    /* ==========================================
       SIGNATURE
       ========================================== */

    const signature =
      mobileMenu.querySelector(
        ".arklm-menu-signature"
      );

    signature.style.cssText = `
      color: #4f565a !important;

      font-family: Arial, sans-serif !important;

      font-size: 6px !important;

      font-weight: 800 !important;

      letter-spacing: 2px !important;

      text-align: left !important;

      margin-bottom: 4px !important;
    `;


    signature
      .querySelectorAll("em")
      .forEach(function (dot) {

        dot.style.color =
          "#ff1f35";

        dot.style.fontStyle =
          "normal";

        dot.style.margin =
          "0 4px";

      });


    document.body.appendChild(
      mobileMenu
    );


    /* Animation */

    requestAnimationFrame(function () {

      mobileMenu.style.opacity = "1";

      mobileMenu.style.transform =
        "translateY(0)";

    });

  }


  /* ==========================================
     FERMER LE MENU
     ========================================== */

  function fermerMenu() {

    menuOpen = false;

    menuButton.setAttribute(
      "aria-expanded",
      "false"
    );


    if (mobileMenu) {

      mobileMenu.style.opacity = "0";

      mobileMenu.style.transform =
        "translateY(-10px)";


      setTimeout(function () {

        if (mobileMenu) {

          mobileMenu.remove();

          mobileMenu = null;

        }

      }, 220);

    }


    /* ✕ → ☰ */

    const spans =
      menuButton.querySelectorAll("span");

    spans.forEach(function (span) {

      span.style.transform = "";

    });

  }


  /* ==========================================
     CLIC SUR LE BOUTON MENU
     ========================================== */

  menuButton.addEventListener(
    "click",
    function (event) {

      event.preventDefault();

      event.stopPropagation();


      if (menuOpen) {

        fermerMenu();

      } else {

        /* ☰ → ✕ */

        const spans =
          menuButton.querySelectorAll("span");

        if (spans.length >= 3) {

          spans[0].style.transform =
            "translateY(7px) rotate(45deg)";

          spans[1].style.transform =
            "scaleX(0)";

          spans[2].style.transform =
            "translateY(-7px) rotate(-45deg)";

        }

        ouvrirMenu();

      }

    }
  );


  /* ==========================================
     ANNÉE DU FOOTER
     ========================================== */

  document
    .querySelectorAll("#year")
    .forEach(function (element) {

      element.textContent =
        new Date().getFullYear();

    });


  /* ==========================================
     SCROLL DOUX
     ========================================== */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach(function (link) {

      link.addEventListener(
        "click",
        function (event) {

          const target =
            document.querySelector(
              link.getAttribute("href")
            );

          if (target) {

            event.preventDefault();

            target.scrollIntoView({
              behavior: "smooth"
            });

          }

        }
      );

    });

});