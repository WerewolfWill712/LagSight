const resultEl = document.getElementById("result"),
    drawBtnEL = document.getElementById("raff-draw"),
    listRaffleNamEL = document.getElementById("raffle-list-nam"),
    listRaffTickets = document.getElementById("raffle-tickets")

async function raffleList() {
    const res = await fetch('movies.json'),
        data = await res.json()
    let rafflist = data.raffleList
    drawBtnEL.addEventListener("click", () => { arr = []
        while (arr.length < 3) { arr.push(count(rafflist)) }renderDraw(arr) })
    renderlist(rafflist)
    return arr
}
let count = (list) => {
    let total = 0
    list.forEach(el => {
        total += el.tickets
    });
    let ticketChance = total / list.length
    let currentTicTotal = 0
    let rand = Math.random() * total
    for (let i = 0; i < list.length; i++) {
        currentTicTotal += ticketChance
        if (rand < currentTicTotal) {
            return list[i].movie
        }
    }
}
let renderDraw = async (result) => {
    const duplicates = result.filter((item, index) => index !== result.indexOf(item));
    if (duplicates.length > 0) { result = await raffleList() }
    let resRender = ''
    result.forEach(i => resRender += `<span class="draResult">${i}</span>`)
    resultEl.innerHTML = resRender
}
let renderlist = (list) => {
    let liRender = '',
        ticRender = ''
    liRender += `<h3>Movie</h3>`
    list.forEach(i => {
        liRender += `<div class = "movies">${i.movie}:  ${i.tickets}</div>`
    })
    listRaffleNamEL.innerHTML = liRender
    listRaffTickets.innerHTML = ticRender
}
raffleList()