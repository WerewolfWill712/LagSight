import lists from "./movies.json" assert { type: "json" };
const {movielst,silverList,bronzeList,raffleList} = lists
let renderLists = ()=>{
    let iterator = (list)=>{
        let movielstTxt = ""
        
        list.forEach(item => {
            movielstTxt+=`*${item.movie}*\n`
        })
        return movielstTxt
    };
    let raffRender = ()=>{
        let rafResult = ''
        raffleList.forEach(raff => {
            rafResult+=`**${raff.movie}: ${raff.tickets}**\n`
        });
        return rafResult
    }
    console.log(raffRender());
    console.log(iterator(movielst))
    console.log(iterator(silverList))
    console.log(iterator(bronzeList))
}
document.querySelector("footer").addEventListener("click",renderLists)