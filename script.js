/* =====================================================
   SAVAN GHADIYA — WEBSITE JAVASCRIPT
   ===================================================== */


/* ================= LOADER ================= */


window.addEventListener("load", () => {

    const loader =
        document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hide");

    }, 1700);

});


/* ================= MOUSE MOVEMENT ================= */


const heroVisual =
    document.querySelector(".hero-right");


if (heroVisual) {

    document.addEventListener(
        "mousemove",
        (event) => {

            const x =
                (window.innerWidth / 2 -
                    event.clientX) / 45;

            const y =
                (window.innerHeight / 2 -
                    event.clientY) / 45;


            heroVisual.style.transform =
                `translate(${x}px, ${y}px)`;

        }
    );

}


/* ================= SCROLL REVEAL ================= */


const revealElements =
    document.querySelectorAll(
        ".intro-section, .statement-section, .why-section, .goal-section"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.style.opacity =
                            "1";

                        entry.target.style.transform =
                            "translateY(0)";

                    }

                }
            );

        },

        {
            threshold: .12
        }

    );


revealElements.forEach(
    (element) => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(50px)";

        element.style.transition =
            "opacity 1s ease, transform 1s ease";

        observer.observe(element);

    }
);


/* ================= CARD TILT ================= */


const cards =
    document.querySelectorAll(
        ".why-card"
    );


cards.forEach(
    (card) => {

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateX =
                    (y - centerY) / 25;


                const rotateY =
                    (centerX - x) / 25;


                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-8px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    "";

            }
        );

    }
);
