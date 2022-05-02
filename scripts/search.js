// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
let n=document.getElementById("navbar");
n.innerHTML=navbar();
import {appendt} from "../components/fetch.js"
console.log(1)
var data=localStorage.getItem("news");
console.log(data)

var container=document.getElementById("results");
const fetchf=async (data)=>{
    let res=await fetch(`https://masai-mock-api.herokuapp.com/news?q=${data}`);
    let data1=await res.json();
    console.log(data1.articles)

   
    appendt(data1.articles,container)
}
fetchf(data)