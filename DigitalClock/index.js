function updateclock() {

    let time = new Date();

    let hours = time.getHours().toString().padStart(2, 0);
    let minutes = time.getMinutes().toString().padStart(2, 0);
    let seconds = time.getSeconds().toString().padStart(2, 0);
    let timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = timeString;

}

updateclock()
setInterval(updateclock, 1000)