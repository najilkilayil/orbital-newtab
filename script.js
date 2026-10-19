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

let searchBar = document.getElementById("search_bar")
let searchInput = document.getElementById("search_input_area")

searchBar.addEventListener("submit", function(event) {
    event.preventDefault()

    let resultText = searchInput.value.trim()

    if (resultText !== "") {
        let googleURL = "https://www.google.com/search?q=" + encodeURIComponent(resultText) 

        // window.location.href = googleURL
        window.open(googleURL, "_blank")

        searchInput.value = ""
    }
})