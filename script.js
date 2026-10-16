setInterval(() => {
    updateTime()
}, 1000);

function updateTime() {
    let time = document.getElementById("time")
    let date = document.getElementById("date")
    let day = document.getElementById("day")

    let now = new Date()

    let currentTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    })

    time.innerHTML = currentTime

    let dayName = now.toLocaleString("en-US", {
        weekday: "long"
    })

    day.textContent = dayName

    let dateFormate = now.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    }).toUpperCase()

    date.innerHTML = dateFormate
}