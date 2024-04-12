let boxes = document.querySelector(".container").children

let btn = document.querySelector("button");
const getColor = () => {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);

    return `rgb(${val1},${val2},${val3})`;
}


btn.addEventListener("click", () => {
    Array.from(boxes).forEach(e => {
        e.style.backgroundColor = getColor();
        e.style.borderColor = getColor();
    });
});



