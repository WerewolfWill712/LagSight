const movieNamEl = document.getElementById("movie-nam")
const movieImgEl = document.getElementById("movie-img")
const drawSilverBtn = document.getElementById("draw-silver")
const drawRaffleBtn = document.getElementById("draw-raffle")
const drawMainBtn = document.getElementById("draw")
const drawBronzeBtn = document.getElementById("draw-bronze")
const cpyBtn = document.getElementById("copy")
const httpServer = "http://127.0.0.1:8080"
drawMainBtn.addEventListener("click",()=>{
    fetch('movies.json')
    .then(Response=>Response.json())
    .then(movies =>{
        let randGen=[]
        let namRes=[]
        let imgRes=[]
        let res=[namRes,imgRes]

        while(randGen.length < 3){
            let candidateInt = Math.floor(Math.random() * (movies.movielst.length-1))
            if(randGen.indexOf(candidateInt) === -1) randGen.push(candidateInt)
        }

        for (let i = 0; i < randGen.length; i++) {
            namRes.push(movies.movielst[randGen[i]].movie)
            imgRes.push(movies.movielst[randGen[i]].img)
        }

        let resultNam=""
        let resultimg=""
        for (let i = 0; i <res[0].length; i++) {
            resultNam+=`<p class="title">${res[0][i]}</p>`;
            resultimg+=`<img id="img${[i]}" class="image" src="${httpServer}/${res[1][i]}">`
        }

        let cpyArr = []
        let btncopy = `Copy Result`
        for (let i = 0; i < res[0].length; i++) {
            cpyArr.push(res[0][i])
        }

        movieNamEl.innerHTML=resultNam
        movieImgEl.innerHTML=resultimg
        cpyBtn.innerHTML=btncopy

        const img0El=document.getElementById("img0")
        const img1El=document.getElementById("img1")
        const img2El=document.getElementById("img2")

        let cpyImgInfo = (imgNum)=>{
            let lotNum = []
            for (let i = 0; i < randGen.length; i++) {
                lotNum.push(randGen[i]+1)
            }
            navigator.clipboard.writeText(
                `#${[lotNum[imgNum]]}**${cpyArr[imgNum]}**
                > Rating: ${movies.silverList[randGen[imgNum]].rating}
                > Content Guide: https://www.imdb.com/title/${movies.movielst[randGen[imgNum]].imdb}/parentalguide
                > Trailer: https://www.youtube.com/watch?v=${movies.movielst[randGen[imgNum]].trailer}`
                ) 
        }

        img0El.addEventListener("click",()=>{cpyImgInfo(0)})
        img1El.addEventListener("click",()=>{cpyImgInfo(1)})
        img2El.addEventListener("click",()=>{cpyImgInfo(2)})
        
        cpyBtn.addEventListener("click",()=>{
            let lotNum = []
            for (let i = 0; i < randGen.length; i++) {
            lotNum.push(randGen[i]+1)
            }
            navigator.clipboard.writeText(
            `@CreationSpren **VOTING**
            React with :one: (:"one":) to vote for:
            #${[lotNum[0]]}**${cpyArr[0]}**
            React with :two: (:"two":) to vote for:
            #${[lotNum[1]]} **${cpyArr[1]}**
            React with :three:(:"three":) to vote for:
            #${[lotNum[2]]} **${cpyArr[2]}**`
            )
            btncopy=`Copied!`
            cpyBtn.innerHTML=btncopy
        } )
    }) 
})
drawSilverBtn.addEventListener("click",()=>{
    fetch('movies.json')
    .then(Response=>Response.json())
    .then(movies =>{
        let randGen=[]
        let namRes=[]
        let imgRes=[]
        let res=[namRes,imgRes]

        while(randGen.length < 3){
            let candidateInt = Math.floor(Math.random() * (movies.silverList.length-1))
            if(randGen.indexOf(candidateInt) === -1) randGen.push(candidateInt)
        }

        for (let i = 0; i < randGen.length; i++) {
            namRes.push(movies.silverList[randGen[i]].movie)
            imgRes.push(movies.silverList[randGen[i]].img)
        }

        let resultNam=""
        let resultimg=""
        for (let i = 0; i <res[0].length; i++) {
            resultNam+=`<p class="title">${res[0][i]}</p>`;
            resultimg+=`
            <img id="img${[i]}" class="image" src="${httpServer}/${res[1][i]}">`
        }

        let cpyArr = []
        for (let i = 0; i < res[0].length; i++) {
            cpyArr.push(res[0][i])
        }

        movieNamEl.innerHTML=resultNam
        movieImgEl.innerHTML=resultimg

        const img0El=document.getElementById("img0")
        const img1El=document.getElementById("img1")
        const img2El=document.getElementById("img2")

        let cpyImgInfo = (imgNum)=>{
            let lotNum = []
            for (let i = 0; i < randGen.length; i++) {
                lotNum.push(randGen[i]+1)
            }
            navigator.clipboard.writeText(
                `#${[lotNum[imgNum]]}**${cpyArr[imgNum]}**
                > Rating: ${movies.silverList[randGen[imgNum]].rating}
                > Content Guide: https://www.imdb.com/title/${movies.silverList[randGen[imgNum]].imdb}/parentalguide
                > Trailer: https://www.youtube.com/watch?v=${movies.silverList[randGen[imgNum]].trailer}`
                ) 
        }

        img0El.addEventListener("click",()=>{cpyImgInfo(0)})
        img1El.addEventListener("click",()=>{cpyImgInfo(1)})
        img2El.addEventListener("click",()=>{cpyImgInfo(2)})
        
        cpyBtn.addEventListener("click",()=>{
            let lotNum = []
            for (let i = 0; i < randGen.length; i++) {
            lotNum.push(randGen[i]+1)
            }
            navigator.clipboard.writeText(
            `@mention **VOTING**
            React with :one: (:"one":) to vote for:
            #${[lotNum[0]]}**${cpyArr[0]}**
            React with :two: (:"two":) to vote for:
            #${[lotNum[1]]} **${cpyArr[1]}**
            React with :three:(:"three":) to vote for:
            #${[lotNum[2]]} **${cpyArr[2]}**`
            )
            btncopy=`Copied!`
            cpyBtn.innerHTML=btncopy
        } )
    })
})
    drawBronzeBtn.addEventListener("click",()=>{
        fetch('movies.json')
    .then(Response=>Response.json())
    .then(movies =>{
        let randGen=[]
        let namRes=[]
        let imgRes=[]
        let res=[namRes,imgRes]

        while(randGen.length < 3){
            let candidateInt = Math.floor(Math.random() * (movies.bronzeList.length-1))
            if(randGen.indexOf(candidateInt) === -1) randGen.push(candidateInt)
        }

        for (let i = 0; i < randGen.length; i++) {
            namRes.push(movies.bronzeList[randGen[i]].movie)
            imgRes.push(movies.bronzeList[randGen[i]].img)
        }

        let resultNam=""
        let resultimg=""
        for (let i = 0; i <res[0].length; i++) {
            resultNam+=`<p class="title">${res[0][i]}</p>`;
            resultimg+=`
            <img id="img${[i]}" class="image" src="${httpServer}/${res[1][i]}">`
        }

        let cpyArr = []
        for (let i = 0; i < res[0].length; i++) {
            cpyArr.push(res[0][i])
        }

        movieNamEl.innerHTML=resultNam
        movieImgEl.innerHTML=resultimg

        const img0El=document.getElementById("img0")
        const img1El=document.getElementById("img1")
        const img2El=document.getElementById("img2")

        let cpyImgInfo = (imgNum)=>{
            let lotNum = []
            for (let i = 0; i < randGen.length; i++) {
                lotNum.push(randGen[i]+1)
            }
            navigator.clipboard.writeText(
                `#${[lotNum[imgNum]]}**${cpyArr[imgNum]}**
                > Rating: ${movies.bronzeList[randGen[imgNum]].rating}
                > Content Guide: https://www.imdb.com/title/${movies.bronzeList[randGen[imgNum]].imdb}/parentalguide
                > Trailer: https://www.youtube.com/watch?v=${movies.bronzeList[randGen[imgNum]].trailer}`
                ) 
        }

        img0El.addEventListener("click",()=>{cpyImgInfo(0)})
        img1El.addEventListener("click",()=>{cpyImgInfo(1)})
        img2El.addEventListener("click",()=>{cpyImgInfo(2)})
        
        cpyBtn.addEventListener("click",()=>{
            let lotNum = []
            for (let i = 0; i < randGen.length; i++) {
            lotNum.push(randGen[i]+1)
            }
            navigator.clipboard.writeText(
            `@mention **VOTING**
            React with :one: (:"one":) to vote for:
            #${[lotNum[0]]}**${cpyArr[0]}**
            React with :two: (:"two":) to vote for:
            #${[lotNum[1]]} **${cpyArr[1]}**
            React with :three:(:"three":) to vote for:
            #${[lotNum[2]]} **${cpyArr[2]}**`
            )
            btncopy=`Copied!`
            cpyBtn.innerHTML=btncopy
        })
    })
})