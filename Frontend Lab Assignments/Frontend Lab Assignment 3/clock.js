
const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
    });

    date.textContent = now.toLocaleDateString("en-IN", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

updateClock();

setInterval(updateClock, 1000);
