let child = document.querySelector(".child");
let childContainer = document.querySelector(".childContainer");
let container = document.querySelector(".container");

const randomColor = () => {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1},${val2},${val3})`;
}

setInterval(() => {
    child.style.backgroundColor = randomColor();
}, 300);
setInterval(() => {
    childContainer.style.backgroundColor = randomColor();
}, 1000);
setInterval(() => {
    container.style.backgroundColor = randomColor();
}, 4000);

child.addEventListener("click", (e) => {
    alert("child  is Clicked!!!!");
    e.stopPropagation()
})
childContainer.addEventListener("click", (e) => {
    alert("child Container is Clicked!!!!");
    e.stopPropagation()
})
container.addEventListener("click", () => {
    alert("Container is Clicked!!!!");
})
