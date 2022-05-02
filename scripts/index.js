// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
let n=document.getElementById("navbar");
n.innerHTML=navbar();
import {sidebar} from "../components/sidebar.js"
let m=document.getElementById("sidebar");
m.innerHTML=sidebar();
import {apical,appendt,apicall} from "../components/fetch.js"
let show=document.getElementById("results")
// show.innerHTML=

let res= await apical("https://masai-mock-api.herokuapp.com/news/top-headlines?country=in")
console.log(res.articles)
appendt(res.articles,show)


let search1= async()=>{
    var here=document.getElementById("results");
    here.innerHTML=null; 

    let valu1=document.getElementById("search_input").value;

    let g=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${valu1}`)
    let re=await g.json();
    appendt(re,here)

    }
    let searc=document.getElementById("search_input")
    searc.addEventListener("keypress",csearch);
    async function csearch(e){
if(e.key=="Enter")
{
    let sv=searc.value
    localStorage.setItem("news",sv)
    window.location.href="search.html"
}
    }

    var ch=document.getElementById("sidebar").children
    for(let el of ch)
    {
        el.addEventListener("click",c1search)
    }
    function c1search(){
       var gh= document.getElementById("results");
       gh.innerHTML=null
        apicall(this.id).then((data)=>{
        appendt(data.articles,gh)
        });
        
    }
