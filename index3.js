const movieListEl = document.getElementById("movielist"),
watchedListEl = document.getElementById("watchedlist"),
silverListEl = document.getElementById("silverlist"),
bronzeListEl = document.getElementById("bronzelist")

let movielist=async()=>{
    const res = await fetch("movies.json"),
    data =await res.json(),
    list= data.movielst
    renderlist(list,movieListEl)
},

silverlist=async () => {
    const res = await fetch("movies.json"),
    data =await res.json(),
    list = data.silverList
    renderlist(list,silverListEl)
},

bronzeList=async () => {
    const res = await fetch("movies.json"),
    data =await res.json(),
    list = data.bronzeList
    renderlist(list,bronzeListEl)
},

watchedList=async () => {
    const res = await fetch("movies.json"),
    data =await res.json(),
    list = data.watchedList
    renderlist(list,watchedListEl)
},

blackList=async () => {
    const res = await fetch("movies.json"),
    data =await res.json(),
    list = data.theBlacklist
}

let funcArr=[movielist, silverlist, bronzeList, watchedList],

callAll = async(callback)=>callback

renderlist=(list,element)=>{
    let result = ''
    for (let i = 0; i < list.length; i++) {
        const movie = list[i].movie,
        img = list[i].img,
        imdb = list[i].imdb,
        trailer = list[i].trailer,
        date = list[i].date,
        ID=list[i].ID
        if (date!=undefined) {
            result+=`<div class="indivnam">
            <span class="name">${movie}</span>
            <span class="date">${date}</span>
            </div>`
        }else if(ID!=undefined) {
            result+=`
            <div id="${ID}" class="indivnam">
            <span>${movie}</span>
            <div id="tog${ID}" class="defClass">
            <img src="images/${img}">
            <a href="https://www.imdb.com/title/${imdb}/parentalguide" target="_blank">Content Guide</a>
            <a href="https://www.youtube.com/watch?v=${trailer}" target="_blank">Trailer</a>
            </div>            
            </div>`
        
        }else{
            result+=`
            <div id="${i}" class="indivnam">
            <span>${movie}</span>
            <div id="movTog${i}" class="defClass">
            <img src="images/${img}">
            <a href="https://www.imdb.com/title/${imdb}/parentalguide" target="_blank">Content Guide</a>
            <a href="https://www.youtube.com/watch?v=${trailer}" target="_blank">Trailer</a>
            </div>            
            </div>`
        }
    }
    element.innerHTML+=result
    let addToggle =async()=>{
        await callAll()
        for (let i = 0; i < list.length; i++) {
            let element=list[i]
            let eventEL=document.getElementById(element.ID)
            let togEl=document.getElementById(`tog${element.ID}`)
            if (eventEL!=null) {
                eventEL.addEventListener("click",()=>{
                    togEl.classList.toggle('togClass')
                })
            }
        }
    }
    addToggle()
}
for (let i = 0; i < funcArr.length; i++) {callAll(funcArr[i]())}
