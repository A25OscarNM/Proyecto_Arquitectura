document.addEventListener("DOMContentLoaded", () => {
    // Attach handlers to project links: when clicked, store data in sessionStorage and navigate to plantilla
    function attachProjectLinkHandlers() {
        const links = document.querySelectorAll('a.project-link');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                // allow normal ctrl/cmd click to open in new tab
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                e.preventDefault();
                const data = {
                    title: this.getAttribute('data-title') || this.querySelector('img')?.alt || 'Proyecto',
                    location: this.getAttribute('data-location') || '',
                    image: this.getAttribute('data-image') || (this.querySelector('img')?.getAttribute('src')) || 'img/casa1.png',
                    desc: this.getAttribute('data-desc') || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                };
                try { sessionStorage.setItem('projectData', JSON.stringify(data)); } catch (err) {}
                // Navigate to plantilla.html
                window.location.href = this.getAttribute('href') || './plantilla.html';
            });
        });
    }
    attachProjectLinkHandlers();
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(slider => {
        const slides = slider.querySelector(".slides");
    const images = slides.querySelectorAll("img");
        const prev = slider.querySelector(".prev");
        const next = slider.querySelector(".next");

        let index = 0;

        function update() {
            slides.style.transform = `translateX(-${index * 100}%)`;
        }

        next.addEventListener("click", () => {
            index = (index + 1) % images.length;
            update();

        });

        prev.addEventListener("click", () => {
            index = (index - 1 + images.length) % images.length;
            update();
        });

        update();
    });

});


document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll("[data-carousel]");

    carousels.forEach(carousel => {
        const cards = carousel.querySelector(".cards");
        const slides = carousel.querySelectorAll(".card");
        const prev = carousel.querySelector(".prev");
        const next = carousel.querySelector(".next");

        let index = 0; // primera imagen visible
        const visibleCount = 2; // mostramos 2 imágenes

        function update() {
            // Mover una sola imagen (50% del contenedor visible)
            cards.style.transform = `translateX(-${index * (100 / visibleCount)}%)`;
        }

        next.addEventListener("click", () => {
            if (index < slides.length - visibleCount) {
                index++;
            } else {
                index = 0; // volver al inicio
            }
            update();
        });

        prev.addEventListener("click", () => {
            if (index > 0) {
                index--;
            } else {
                index = slides.length - visibleCount; // ir al final
            }
            update();
        });

        update();
    });
});