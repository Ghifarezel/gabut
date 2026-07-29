const envelope = document.getElementById("envelope");
const video = document.getElementById("introVideo");
const music = document.getElementById("bgMusic");

envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

        showPage("video-page");

        video.currentTime = 0;
        music.currentTime = 0;

        music.volume = 0.35;

        video.play();
        music.play();

        // Pindah ke gallery saat video selesai
        video.onended = function () {

            showPage("gallery-page");

        };

    }, 800);

});