// LOADING SCREEN

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 1000);

    }, 1200);

});


// MOUSE PARALLAX

const visual = document.querySelector(".hero-visual");

document.addEventListener("mousemove", (event) => {

    if (!visual) return;

    const x = (window.innerWidth / 2 - event.clientX) / 40;
    const y = (window.innerHeight / 2 - event.clientY) / 40;

    visual.style.transform =
        `translate(${x}px, ${y}px)`;

});


// REVEAL ANIMATION

const sections =
    document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: .15
    }
);

sections.forEach(section => {
    observer.observe(section);
});


// CARD TILT EFFECT

const cards =
    document.querySelectorAll(".skill-card, .project");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            (y - centerY) / 20;

        const rotateY =
            (centerX - x) / 20;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-5px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// CURRENT YEAR

const footer =
    document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
        `© ${new Date().getFullYear()} Savan Ghadiya. All rights reserved.`;

}
