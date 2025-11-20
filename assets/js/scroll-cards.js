// scroll-cards.js
// Observa las tarjetas `.service-card` y añade la clase `in-view` cuando entran en pantalla.
// También aplica un pequeño retraso escalonado para cada tarjeta.

document.addEventListener('DOMContentLoaded', function () {
    const cards = Array.from(document.querySelectorAll('.service-card'));
    if (!cards.length) return;

    // Aplica un pequeño delay escalonado para cada tarjeta (mejor sensación)
    cards.forEach((card, i) => {
        const delay = i * 100; // 80ms entre tarjetas
        card.style.transitionDelay = `${delay}ms`;
    });

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.18 // entra cuando ~18% de la tarjeta es visible
    };

    const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const el = entry.target;
            if (entry.isIntersecting) {
                // Añadir la clase cuando entra en viewport
                el.classList.add('in-view');
            } else {
                // Quitar la clase cuando sale del viewport para permitir re-animar al volver
                el.classList.remove('in-view');
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas (no se deja de observar para permitir animación repetible)
    cards.forEach(card => io.observe(card));
});
