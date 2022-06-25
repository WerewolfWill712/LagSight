// elements for each list
const movieListEl = document.getElementById("movielist")
const watchedListEl = document.getElementById("watchedlist")
const silverListEl = document.getElementById("silverlist")
const bronzeListEl = document.getElementById("bronzelist")
//const httpServer = "http://127.0.0.1:8080"
fetch('movies.json')
.then(Response=>Response.json())
.then(movies =>{
    // this renders all movies in a list including links to imdb, trailer and image
    let movieListStr=''
    for (let i = 0; i < movies.movielst.length; i++) {
        movieListStr+=`
        <div id="movlst${i}" class="indivnam">
        <span>${movies.movielst[i].movie}</span>
        <div id="movTog${i}" class="defClass">
        <img src="images/${movies.movielst[i].img}">
        <a href="https://www.imdb.com/title/${movies.movielst[i].imdb}/parentalguide" target="_blank">Content Guide</a>
        <a href="https://www.youtube.com/watch?v=${movies.movielst[i].trailer}" target="_blank">Trailer</a>
        </div>            
        </div>`   
    }
    movieListEl.innerHTML+=movieListStr
    // this adds event listeners for every item toggling open and closed displaying image and links
    for (let i = 0; i < movies.movielst.length; i++) {
        let movlst = document.getElementById("movlst"+i)
        let movTog = document.getElementById("movTog"+i)
        movlst.addEventListener("click",()=>{
            movTog.classList.toggle('togClass')
        })
    }
    // this renders all items in watched list
    let watchedlistStr=''
    for (let i = 0; i < movies.watchedList.length; i++) {
        watchedlistStr+=`<div class="indivnam">
        <span class="name">${movies.watchedList[i].movie}</span>
        <span class="date">${movies.watchedList[i].date}</span>
        </div>`            
    }
    watchedListEl.innerHTML+=watchedlistStr
    // this renders all items in silver list
    let silverliststr=''
    for (let i = 0; i < movies.silverList.length; i++) {
        silverliststr+=`
        <div id="silverFull${i}"class="indivnam">
        <span id=item${i}>${movies.silverList[i].movie}</span>
        <div id="silvTog${i}" class="defClass">
        <img src="images/${movies.silverList[i].img}">
        <a href="https://www.imdb.com/title/${movies.silverList[i].imdb}/parentalguide" target="_blank">Content Guide</a>
        <a href="https://www.youtube.com/watch?v=${movies.silverList[i].trailer}" target="_blank">Trailer</a>
        </div>
        </div>`            
    }
    silverListEl.innerHTML+=silverliststr
    // this adds event listeners for showing image and links
    for (let i = 0; i < movies.silverList.length; i++) {
        let silverlistdiv = document.getElementById("silverFull"+i)
        let silvTog = document.getElementById("silvTog"+i)
        silverlistdiv.addEventListener("click",()=>{
            silvTog.classList.toggle('togClass')
        })
    }
    // this renders all items in the bronze list
    let bronzeliststr=''
    for (let i = 0; i < movies.bronzeList.length; i++) {
        bronzeliststr+=`
        <div id="bronzeFull${i}"class="indivnam">
        <span id=item${i}>${movies.bronzeList[i].movie}</span>
        <div id="bronzTog${i}" class="defClass">
        <img src="images/${movies.bronzeList[i].img}">
        <a href="https://www.imdb.com/title/${movies.bronzeList[i].imdb}/parentalguide" target="_blank">Content Guide</a>
        <a href="https://www.youtube.com/watch?v=${movies.bronzeList[i].trailer}" target="_blank">Trailer</a>
        </div>
        </div>`
    }
    bronzeListEl.innerHTML+=bronzeliststr
    // this adds toggles for showing images and links
    for (let i = 0; i < movies.bronzeList.length; i++) {
        let bronzelistdiv = document.getElementById("bronzeFull"+i)
        let bronzTog = document.getElementById("bronzTog"+i)
        bronzelistdiv.addEventListener("click",()=>{
            bronzTog.classList.toggle('togClass')
        })
    }      
} )