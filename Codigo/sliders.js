document.addEventListener("DOMContentLoaded", () => {
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
