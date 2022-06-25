// movie name and image elements stored in variables
const movieNamEl = document.getElementById("movie-nam")
const movieImgEl = document.getElementById("movie-img")
// buttons for drawing from different lists stored here
const drawSilverBtn = document.getElementById("draw-silver")
const drawRaffleBtn = document.getElementById("draw-raffle")
const drawMainBtn = document.getElementById("draw")
const drawBronzeBtn = document.getElementById("draw-bronze")
const cpyBtn = document.getElementById("copy")
// terminal command inside seprate folder "http-server ./ will link folder to sight"
// const httpServer = "http://127.0.0.1:8080"
// on click fetches json file everything else happens inside the fetch
drawMainBtn.addEventListener("click",()=>{
    fetch('movies.json')
    .then(Response=>Response.json())
    .then(movies =>{
        // randGen contains the three random numbers
        let randGen=[]
        // namRes holds the names of the movies generated
        let namRes=[]
        // imgRes holds the same but with filenames
        let imgRes=[]
        // res holds both nested
        let res=[namRes,imgRes]
        // generates 3 random numbers between 0 and movielst.length from JSON file
        while(randGen.length < 3){
            let candidateInt = Math.floor(Math.random() * (movies.movielst.length-1))
            if(randGen.indexOf(candidateInt) === -1) randGen.push(candidateInt)
        }
        // takes random numbers and translates them into filename and moviename
        for (let i = 0; i < randGen.length; i++) {
            namRes.push(movies.movielst[randGen[i]].movie)
            imgRes.push(movies.movielst[randGen[i]].img)
        }
        // sets html test
        let resultNam=""
        let resultimg=""
        for (let i = 0; i <res[0].length; i++) {
            resultNam+=`<p class="title">${res[0][i]}</p>`;
            resultimg+=`<img id="img${[i]}" class="image" src="images/${res[1][i]}">`
        }
        // retrieves movie names for copy info
        let cpyArr = []
        for (let i = 0; i < res[0].length; i++) {
            cpyArr.push(res[0][i])
        }
        // initalizes results for name and image
        movieNamEl.innerHTML=resultNam
        movieImgEl.innerHTML=resultimg
        // initates results as elements for copy individual info
        const img0El=document.getElementById("img0")
        const img1El=document.getElementById("img1")
        const img2El=document.getElementById("img2")
        // function for copying individual info
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
            // event listeners that call funcion above
        img0El.addEventListener("click",()=>{cpyImgInfo(0)})
        img1El.addEventListener("click",()=>{cpyImgInfo(1)})
        img2El.addEventListener("click",()=>{cpyImgInfo(2)})
        
        // sets text for copy button
        let btncopy = `Copy Result`
        cpyBtn.innerHTML=btncopy
        // event listener for copy button this contains voting info
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
            // changes button text after copy reset with click of draw again
            btncopy=`Copied!`
            cpyBtn.innerHTML=btncopy
        } )
    }) 
})
// same procsess as above but inside a different list this time silver
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
            <img id="img${[i]}" class="image" src="images/${res[1][i]}">`
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
//same procsess as above but inside a different list this time bronze
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
            <img id="img${[i]}" class="image" src="images/${res[1][i]}">`
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