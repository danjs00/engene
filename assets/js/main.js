(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const header = document.querySelector(".header");
    const sticky = header.offsetTop;
    const logo = document.querySelector(".navbar-brand img");

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }

    // === logo change
    logo.src = header.classList.contains("sticky")
      ? "https://i.ibb.co/4n7wyy6z/LOGO-1.png"
      : "https://i.ibb.co/G3P7HN4V/LOGO.png";

    // Mostrar u ocultar el botón de volver arriba
    const backToTop = document.querySelector(".back-to-top");
    backToTop.style.display = window.scrollY > 50 ? "flex" : "none";
  };

// ==== Menú scroll
document.querySelectorAll(".menu-scroll").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = elem.getAttribute("href").substring(1); // Eliminar '#' para obtener el id
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Asegura que la sección inicie desde la parte superior
      });
    }
  });
});

// === Resalta el menú activo
function onScroll() {
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
  document.querySelectorAll(".menu-scroll").forEach((currLink) => {
    const targetId = currLink.getAttribute("href").substring(1); // Eliminar '#'
    const refElement = document.getElementById(targetId);
    if (refElement) {
      const refTop = refElement.offsetTop;
      const refBottom = refTop + refElement.offsetHeight;
      if (scrollPos >= refTop - 550 && scrollPos < refBottom - 550) {
        document.querySelector(".menu-scroll.active")?.classList.remove("active");
        currLink.classList.add("active");
      } else {
        currLink.classList.remove("active");
      }
    }
  });
}
document.addEventListener("scroll", onScroll);

  // === Cerrar menú al hacer clic en un enlace
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".menu-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  // === Submenús
  document.querySelectorAll(".nav-item-has-children").forEach((elem) => {
    elem.querySelector("a").addEventListener("click", () => {
      elem.querySelector(".submenu").classList.toggle("show");
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const videoButton = document.querySelector(".video-btn");
    const modal = document.getElementById("videoModal");
    const modalContent = document.querySelector(".modal-content");
    const videoFrame = document.getElementById("videoFrame");
    const closeButton = document.querySelector(".close-btn");

    videoButton.addEventListener("click", function () {
        const videoUrl = this.getAttribute("data-src");
        videoFrame.src = videoUrl;
        modal.classList.add("active");
    });

    function closeModal() {
        modal.classList.remove("active");
        setTimeout(() => {
            videoFrame.src = ""; // Detener el video tras cerrar el modal
        }, 300); // Esperar a que termine la animación
    }

    closeButton.addEventListener("click", closeModal);
    modal.addEventListener("click", function (event) {
        if (!modalContent.contains(event.target)) {
            closeModal();
        }
    });
});


  
    // === Volver arriba con animación
    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  
    document.querySelector(".back-to-top").addEventListener("click", scrollToTop);
})();
