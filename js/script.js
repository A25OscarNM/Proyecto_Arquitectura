window.addEventListener('load', function () {
  const carousels = document.querySelectorAll('[data-carousel]');
  carousels.forEach(carousel => {
    const prev = carousel.querySelector('[data-prev]');
    const next = carousel.querySelector('[data-next]');
    const cards = carousel.querySelector('.cards');
    if (!cards) return;
    const card = cards.querySelector('.card');
    const computedStyle = window.getComputedStyle(card);
    const marginRight = parseInt(computedStyle.marginRight, 10) || 0;
    const step = card ? card.offsetWidth + marginRight : 400; // include CSS margin-right value

    prev && prev.addEventListener('click', () => {
      cards.scrollBy({ left: -step, behavior: 'smooth' });
    });
    next && next.addEventListener('click', () => {
      cards.scrollBy({ left: step, behavior: 'smooth' });
    });
  });
});
