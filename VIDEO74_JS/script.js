let button = document.getElementById("btn");

//List of all mouse events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

button.addEventListener("click", () => {
    let box = document.querySelector(".box");
    box.innerHTML = "<b>Hey! I am a changed content</b> by Jit"
})
let body = document.body;
// body.style.backgroundColor="crimson";
body.addEventListener("click", () => {
    let val1 = Math.floor(Math.random() * 256);
    let val2 = Math.floor(Math.random() * 256);
    let val3 = Math.floor(Math.random() * 256);
    // `rgb(${val1},${val2},${val3})`
    body.style.backgroundColor = `rgb(${val1},${val2},${val3})`;
});

document.addEventListener("keydown",(e)=>{
    console.log(e.key,e.keyCode);
})
