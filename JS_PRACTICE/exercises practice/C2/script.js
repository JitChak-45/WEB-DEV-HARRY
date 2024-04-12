const appendCard=(thumbnail,timestamp,title,cName,views,timeAgo)=>{
let watched;
if(views<1000){
    watched=views;
}
else if(views<100000){
    watched=views/1000+"K";
}
else{
    watched=views/100000+"M";
}
let container=document.querySelector(".container");

let card=document.createElement("div");

card.innerHTML=`<div class="card">
<div class="thumb">
    <div class="thumbnail"><img src="${thumbnail}" alt="thumbnail"></div>
    <div class="timestamp">${timestamp}</div>
</div>
<div class="text">
    <div class="title">${title}</div>
    <div class="views">${cName} . ${watched} views . ${timeAgo} months ago</div>
</div>
</div> `
container.append(card);

}
appendCard("https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw","31:22","Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry",560000,2);
