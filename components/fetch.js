
async function apical(url) {
    let res=await fetch(url)
    let data=await res.json()
    return data;
}
function appendt(articles,container)
{
    articles.forEach((el)=>{
let div=document.createElement("div")
div.setAttribute("class","news")
let title=document.createElement("h3")
let div1=document.createElement("div")
var content=document.createElement("p")
content.innerText = el.description
let imgdiv=document.createElement("div")
let img=document.createElement("img")

title.innerText=el.title;
title.addEventListener("click",()=>{
    localStorage.setItem("article",JSON.stringify(el))
    window.location.href="../news.html"
})
img.src=el.urlToImage;
div1.append(title,content)
imgdiv.append(img)
div.append(imgdiv,div1)
container.append(div)

    })
}


async function apicall(value) {
    let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
    let res=await fetch(url)
    let data=await res.json()
    return data;
}
// export {apical,appendt,apicall}
function appendto(articles,container)
{
    articles.forEach((el)=>{
let div=document.createElement("div")
div.setAttribute("class","news")
let title=document.createElement("p")
let div1=document.createElement("div")
var content=document.createElement("p")
content.innerText = el.description
let imgdiv=document.createElement("div")
let img=document.createElement("img")
title.innerText=el.title;
img.src=el.urlToImage;
div1.append(title,)
imgdiv.append(img)
container.append(imgdiv,div1)

    })
}
export {apical,appendt,apicall}