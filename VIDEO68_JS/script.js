// let boxes=document.getElementsByClassName("box");

// boxes[2].style.backgroundColor="crimson";

// document.getElementById("redbox").style.backgroundColor="red";
// document.querySelector(".box").style.backgroundColor="orange";
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="orange";
})
console.log(document.getElementsByTagName("div"));
let e=document.getElementsByTagName("div");
console.log(e[4].matches("#redbox"));//true
// .closest .contains

console.log(e[2].closest(".container"));
console.log(document.querySelector(".container").contains(e[2]))

