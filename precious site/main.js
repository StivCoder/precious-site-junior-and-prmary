document.addEventListener("DOMContentLoaded", () => {
  // Slider
  const slides = Array.from(document.getElementsByClassName("slide"));
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let slideIndex = 0;
  let autoSlideTimer = null;

  function setActiveSlide(index) {
    slides.forEach((img, i) => {
      if (i === index) {
        img.classList.add("is-active");
        img.setAttribute("aria-hidden", "false");
      } else {
        img.classList.remove("is-active");
        img.setAttribute("aria-hidden", "true");
      }
    });
  }

  function changeSlide(step) {
    if (slides.length === 0) return;
    slideIndex = (slideIndex + step + slides.length) % slides.length;
    setActiveSlide(slideIndex);
  }

  function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => changeSlide(1), 4000);
  }

  function stopAutoSlide() {
    if (autoSlideTimer) clearInterval(autoSlideTimer);
  }

  if (slides.length > 0) {
    setActiveSlide(slideIndex);
    startAutoSlide();

    if (prevBtn) prevBtn.addEventListener("click", () => { changeSlide(-1); startAutoSlide(); });
    if (nextBtn) nextBtn.addEventListener("click", () => { changeSlide(1); startAutoSlide(); });

    // Keyboard navigation for accessibility
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") { changeSlide(-1); startAutoSlide(); }
      if (e.key === "ArrowRight") { changeSlide(1); startAutoSlide(); }
    });
  }

  // Contact form (basic demo handling)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    });
  }

  // Calendar placeholder retained (if an element with id="calendar" exists)
  const calendar = document.getElementById("calendar");
  if (calendar) {
    calendar.textContent = "Calendar still works here!";
  }
});
