document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll("[data-carousel]");

  carousels.forEach(carousel => {
    const cardsContainer = carousel.querySelector(".cards");
    const cards = carousel.querySelectorAll(".card");
    const prev = carousel.querySelector(".prev");
    const next = carousel.querySelector(".next");

    let index = 0;

    function updateCarousel() {
      const cardWidth = cards[0].getBoundingClientRect().width;
      cardsContainer.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    prev.addEventListener("click", () => {
      index = Math.max(index - 1, 0);
      updateCarousel();
    });

    next.addEventListener("click", () => {
      const visibleCards = 2;
      index = Math.min(index + 1, cards.length - visibleCards);
      updateCarousel();
    });

    window.addEventListener("resize", updateCarousel);
  });
});
