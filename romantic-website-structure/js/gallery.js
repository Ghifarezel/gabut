const nextBtn = document.getElementById("nextBtn");
const modal = document.getElementById("letterModal");
const closeBtn = document.getElementById("closeLetter");
const countdown = document.getElementById("countdown-section");

nextBtn.addEventListener("click", () => {

    modal.classList.add("show");

});

closeBtn.addEventListener("click", () => {

    modal.classList.remove("show");

    // tampilkan countdown
    countdown.style.display = "block";

    // scroll ke countdown
    countdown.scrollIntoView({

        behavior: "smooth"

    });

});

window.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.classList.remove("show");

        countdown.style.display = "block";

        countdown.scrollIntoView({

            behavior: "smooth"

        });

    }

});
// =============================
// FOTO MUNCUL SATU PERSATU
// =============================

window.addEventListener("load", () => {

    const cards = document.querySelectorAll(".photo-card");

    cards.forEach((card, index) => {

        setTimeout(() => {

            card.classList.add("show");

        }, index * 300);

    });

});