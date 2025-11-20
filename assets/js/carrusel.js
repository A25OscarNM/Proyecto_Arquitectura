document.addEventListener("DOMContentLoaded", () => {
  // Attach handlers to project links so data is passed to plantilla.html via sessionStorage
  function attachProjectLinkHandlers() {
    const links = document.querySelectorAll('a.project-link');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        // allow opening in new tab
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        const data = {
          title: this.getAttribute('data-title') || this.querySelector('img')?.alt || 'Proyecto',
          location: this.getAttribute('data-location') || '',
          image: this.getAttribute('data-image') || (this.querySelector('img')?.getAttribute('src')) || 'img/casa1.png',
          desc: this.getAttribute('data-desc') || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        try { sessionStorage.setItem('projectData', JSON.stringify(data)); } catch (err) {}
        window.location.href = this.getAttribute('href') || './plantilla.html';
      });
    });
  }
  attachProjectLinkHandlers();
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
