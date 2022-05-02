import {navbar} from "../components/navbar.js"
let n=document.getElementById("navbar");
n.innerHTML=navbar();

// Ude Import export (MANDATORY)
let data=JSON.parse(localStorage.getItem("article"))
console.log(data)
var container=document.getElementById("detailed_news")
    var div = document.createElement("div")
    var img=document.createElement("img")
    var title=document.createElement("h3")
    var des=document.createElement("p")
    title.innerText=data.title;
img.src=data.urlToImage
des.innerText=data.description
div.append(img,des,title)
container.append(div)
