/* =========================
   NAVBAR
========================= */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

document.querySelectorAll(".mobile-menu a").forEach(link => {

  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

});


/* =========================
   ACCOMMODATION MODAL
========================= */

const modal = document.getElementById("modal");
const modalClose = document.getElementById("modalClose");

const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");


const accommodation = {

  rooms: {
    title: "Rooms",
    image:
      "https://raw.githubusercontent.com/freedom-02/Image-/refs/heads/main/IMG_4904.jpeg",
    description:
      "Explore the rooms at K19 Hotel & Suites. Contact the hotel directly for current availability, room options and rates."
  },

  apartment: {
    title: "Apartment",
    image:
      "https://raw.githubusercontent.com/freedom-02/Image-/refs/heads/main/IMG_4899.jpeg",
    description:
      "Discover the apartment accommodation at K19 Hotel & Suites. Contact the hotel directly for availability and booking information."
  }

};


document.querySelectorAll("[data-modal]").forEach(button => {

  button.addEventListener("click", () => {

    const type = button.dataset.modal;
    const data = accommodation[type];

    modalTitle.textContent = data.title;
    modalImage.src = data.image;
    modalImage.alt = data.title;

    modalDescription.textContent = data.description;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);


document.querySelector(".modal-overlay").addEventListener(
  "click",
  closeModal
);


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeModal();
  }

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(
  ".section-heading, .intro-grid, .stay-card, .experience-content, .experience-image, .gallery-item, .cta-inner"
);


const revealObserver = new IntersectionObserver(
  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        revealObserver.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


revealElements.forEach(element => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity 0.8s ease, transform 0.8s ease";

  revealObserver.observe(element);

});