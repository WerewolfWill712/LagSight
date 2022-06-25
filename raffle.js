const listRaffleNamEL = document.getElementById("raffle-list-nam")
const listRaffTickets =  document.getElementById("raffle-tickets")
const drawBtnEL = document.getElementById("raff-draw")
const resultEl = document.getElementById("result")
fetch('movies.json')
.then(Response=>Response.json())
.then(movies=>{
    let ticketTotal=0
    for (let i = 0; i < movies.raffleList.length; i++) {
        ticketTotal += movies.raffleList[i].tickets;  
    }
    let liRender=''
    let ticRender=''
    liRender+=`<h3>Movie</h3>`
    for(let i=0;i<movies.raffleList.length;i++){      
        liRender+=`<li class="movies">${movies.raffleList[i].movie}</li>`
    }
    ticRender+=`<h3 class="ticketList">Tickets</h3>`
    for(let i=0;i<movies.raffleList.length;i++){
        ticRender+=`<li>${movies.raffleList[i].tickets}</li>`
    }
    listRaffTickets.innerHTML=ticRender
    listRaffleNamEL.innerHTML=liRender
    drawBtnEL.addEventListener("click",()=>{
        let randGen=[]
        while(randGen.length < 3){
            let candidateInt = Math.floor(Math.random() * (ticketTotal)+1)
            if(randGen.indexOf(candidateInt) === -1) randGen.push(candidateInt)
        }
        let resRender = ''
        for (let j = 0; j < randGen.length; j++) {           
            for(let i=0 ; i<movies.raffleList.length ; i++){
                if (movies.raffleList[i].range[0]<=randGen[j]&&movies.raffleList[i].range[1]>=randGen[j]){
                    resRender+=`<div id="result${j}" class="draResult">${movies.raffleList[i].movie}</div>`   
                }
            }
        }

        resultEl.innerHTML=resRender
        let txtcopy=[]
        for(let i=0;i<3;i++){
            txtcopy.push(`{"movie":"${document.getElementById("result"+i).textContent}"}`)
        }
        console.log(txtcopy);
        navigator.clipboard.writeText(
            `${txtcopy[0]},${txtcopy[1]},${txtcopy[2]}`
        )
    } )
})