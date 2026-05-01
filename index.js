let homeDisplayEl = document.getElementById("home-board")
let guestDisplayEl = document.getElementById("guest-board")

let homeScore = Number(homeDisplayEl.textContent)
let guestScore = Number(guestDisplayEl.textContent)


function add1h() {
    homeScore += 1
    homeDisplayEl.textContent = homeScore
}
function add2h() {
    homeScore += 2
    homeDisplayEl.textContent = homeScore
}
function add3h() {
    homeScore += 3
    homeDisplayEl.textContent = homeScore
}
function add1g() {
    guestScore += 1
    guestDisplayEl.textContent = guestScore
}
function add2g() {
    guestScore += 2
    guestDisplayEl.textContent = guestScore
}
function add3g() {
    guestScore += 3
    guestDisplayEl.textContent = guestScore
}