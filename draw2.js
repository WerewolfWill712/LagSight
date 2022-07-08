const movieNamEl = document.getElementById("movie-nam"),
movieImgEl = document.getElementById("movie-img"),
drawSilverBtn = document.getElementById("draw-silver"),
drawRaffleBtn = document.getElementById("draw-raffle"),
drawMainBtn = document.getElementById("draw"),
drawBronzeBtn = document.getElementById("draw-bronze"),
cpyBtn = document.getElementById("copy")

drawMainBtn.addEventListener("click",()=>{renderDraw('movielst')})
drawSilverBtn.addEventListener("click",()=>{renderDraw('silverList')})
drawBronzeBtn.addEventListener("click",()=>{renderDraw('bronzeList')})

function draw(list) {
    let randGen=[],
    namRes='',
    imgRes=''
    while (randGen.length<3) {
        let candInt=Math.floor(Math.random()*(list.length-1))
        if(randGen.indexOf(candInt)===-1){
            randGen.push(candInt)
        }
    }
    for (let i = 0; i < randGen.length; i++) {
        const movie = list[randGen[i]].movie,
        img = list[randGen[i]].img
        namRes+=`<p id="nam${[i]}"class="titles">${movie}</p>\r\n`
        imgRes+=`<img id="img${[i]}" class="image" src="images/${img}">\r\n`
    }
    movieNamEl.innerHTML=namRes
    movieImgEl.innerHTML=imgRes
    const img0El=document.getElementById("img0"),
    img1El=document.getElementById("img1"),
    img2El=document.getElementById("img2")
    img0El.addEventListener("click",()=>{cpyImgInfo(0)})
    img1El.addEventListener("click",()=>{cpyImgInfo(1)})
    img2El.addEventListener("click",()=>{cpyImgInfo(2)})
    let cpyImgInfo=(num)=>{
        let listAcc=list[randGen[num]]
        console.log(`#${randGen[num]+1} **${listAcc.movie}**\r\n> Rating: ${listAcc.rating}\r\n> Content Guide: https://www.imdb.com/title/${listAcc.imdb}/parentalguide\r\n> Trailer: https://www.youtube.com/watch?v=${listAcc.trailer}`)
        // navigator.clipboard.writeText(
        // )
    }
    cpyBtn.addEventListener("click",()=>{
        let listAcc=[list[randGen[0]],list[randGen[1]],list[randGen[2]]]
        console.log(`**VOTING**\r\nReact with :one: (:"one":) to vote for:\r\n#${randGen[0]+1} **${listAcc[0].movie}**\r\nReact with :two: (:"two":) to vote for:\r\n#${randGen[1]+1} **${listAcc[1].movie}**\r\nReact with :three:(:"three":) to vote for:\r\n#${randGen[2]+1} **${listAcc[2].movie}**`)
        cpyBtn.innerText="Copied!"
    })
}
async function renderDraw(list) {
    const res = await fetch("movies.json"),
    data=await res.json()
    if (list==='movielst') {
        draw(data.movielst)
    }else if (list==='silverList') {
        draw(data.silverList)
    }else if(list==='bronzeList'){
        draw(data.bronzeList)
    }
}
