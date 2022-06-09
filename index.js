const movieNamEl = document.getElementById("movie-nam")
const movieImgEl = document.getElementById("movie-img")
const drawBtn = document.getElementById("draw")
const movies = [
    {  
        movie:"The Help",
        img:"thehelp.jpg"
    },
    {
        movie:"Army of Darkness",
        img:"Army of Darkness.jpg"
    },
    {
        movie:"The Fall",
        img:"thefall.jpg"
    },
    {
        movie:"The Princesess Bride",
        img:"the princesess bride.jpg"
    },
    {
        movie:"The Prestige",
        img:"theprestige.jpg"
    },{
        movie:"Treasure Planet",
        img:"treasurePlanet.jpg"
    },{
        movie:"Groundhogs Day",
        img:"groundhogs day.jpg"
    },{
        movie:"The Truman Show",
        img:"the truman show.jpg"
    },{
        movie:"Master and Commander",
        img:"masterAndCommander.jpg"
    },{
        movie:"The guy who didn't like Musicals",
        img:"TGWDLM.jpg"
    },{
        movie:"The Count of Monte Christo",
        img:"the count of monte cristo.jpg"
    },{
        movie:"Young Sherlock Holmes",
        img:"youngSherHolmes.jpg"
    },
]
let draw = ()=>{
    let randGen=[]
    let namRes=[]
    let imgRes=[]
    let res=[namRes,imgRes]
    while(randGen.length < 3){
        let candidateInt = Math.floor(Math.random() * (movies.length-1))
        if(randGen.indexOf(candidateInt) === -1) randGen.push(candidateInt)
    }
    for (let i = 0; i < randGen.length; i++) {
        namRes.push(movies[randGen[i]].movie)
        imgRes.push(movies[randGen[i]].img)
    }

return res
}
drawBtn.addEventListener("click",()=>{
    let inRes=draw()
    let resultNam=""
    let resultimg=""
    for (let i = 0; i < inRes[0].length; i++) {
        resultNam+=`<p class="title">${inRes[0][i]}</p>`;
        resultimg+=`<img class="image" src="http://192.168.1.20:8080/${inRes[1][i]}">`
    }
    movieNamEl.innerHTML=resultNam
    movieImgEl.innerHTML=resultimg
})
