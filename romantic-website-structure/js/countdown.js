// ===============================
// TANGGAL JADIAN
// ===============================

const startDate = new Date("2024-02-15T00:00:00");

// ===============================

function updateCounter(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000*60*60*24));

    const hours = Math.floor((diff/(1000*60*60)) % 24);

    const minutes = Math.floor((diff/(1000*60)) % 60);

    const seconds = Math.floor((diff/1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter,1000);