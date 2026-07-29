const video = document.getElementById("introVideo");

video.addEventListener("ended", function () {

    console.log("Video selesai");

    showPage("gallery-page");

});