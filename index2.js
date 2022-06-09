const movieNamEl = document.getElementById("movie-nam")
const movieImgEl = document.getElementById("movie-img")
const drawBtn = document.getElementById("draw")
const cpyBtn = document.getElementById("copy-btn")
const movieListEl = document.getElementById("movielist")
const watchedListEl = document.getElementById("watchedlist")
const silverListEl = document.getElementById("silverlist")
const bronzeListEl = document.getElementById("bronzelist")
const httpServer = "http://127.0.0.1:8080"
fetch('movies.json')
.then(Response=>Response.json())
.then(movies =>{
    let movieListStr=''
        let watchedlistStr=''
        let silverliststr=''
        let bronzeliststr=''
        for (let i = 0; i < movies.movielst.length; i++) {
        movieListStr+=`
        <div id="movlst${i}" class="indivnam">
            <span>${movies.movielst[i].movie}</span>
            <div id="movTog${i}" class="defClass">
            <img src="${httpServer}/${movies.movielst[i].img}">
            </div>            
        </div>`   
        }
        for (let i = 0; i < movies.watchedList.length; i++) {
        watchedlistStr+=`<div class="indivnam">
        <span class="name">${movies.watchedList[i].movie}</span>
        <span class="date">${movies.watchedList[i].date}</span>
        </div>`            
        }
        for (let i = 0; i < movies.silverList.length; i++) {
        silverliststr+=`
            <div id="silverFull${i}"class="indivnam">
                <span id=item${i}>${movies.silverList[i].movie}</span>
                <div id="silvTog${i}" class="defClass">
                <img src="${httpServer}/${movies.silverList[i].img}">
                <a href="https://www.imdb.com/title/${movies.silverList[i].imdb}/parentalguide" target="_blank">Content Guide</a>
                <a href="https://www.youtube.com/watch?v=${movies.silverList[i].trailer}" target="_blank">Trailer</a>
                </div>
            </div>`            
        }
        for (let i = 0; i < movies.bronzeList.length; i++) {
            bronzeliststr+=`
            <div id="bronzeFull${i}"class="indivnam">
                <span id=item${i}>${movies.bronzeList[i].movie}</span>
                <div id="bronzTog${i}" class="defClass">
                <img src="${httpServer}/${movies.bronzeList[i].img}">
                <a href="https://www.imdb.com/title/${movies.bronzeList[i].imdb}/parentalguide" target="_blank">Content Guide</a>
                <a href="https://www.youtube.com/watch?v=${movies.bronzeList[i].trailer}" target="_blank">Trailer</a>
                </div>
            </div>`
        }
        
        watchedListEl.innerHTML+=watchedlistStr
        
        movieListEl.innerHTML+=movieListStr
        for (let i = 0; i < movies.movielst.length; i++) {
            let movlst = document.getElementById("movlst"+i)
            let movTog = document.getElementById("movTog"+i)
            movlst.addEventListener("click",()=>{
                movTog.classList.toggle('togClass')
            })
        }
        
        silverListEl.innerHTML+=silverliststr
        for (let i = 0; i < movies.silverList.length; i++) {
            let silverlistdiv = document.getElementById("silverFull"+i)
            let silvTog = document.getElementById("silvTog"+i)
            silverlistdiv.addEventListener("click",()=>{
                silvTog.classList.toggle('togClass')
            })
        }
        bronzeListEl.innerHTML+=bronzeliststr
        for (let i = 0; i < movies.bronzeList.length; i++) {
            let bronzelistdiv = document.getElementById("bronzeFull"+i)
            let bronzTog = document.getElementById("bronzTog"+i)
            bronzelistdiv.addEventListener("click",()=>{
                bronzTog.classList.toggle('togClass')
            })
        }
    })