let boxes = document.querySelector(".container").children;

//the main formula to generate random number between and b is 
// a + r (b-a)
// where r is a random nuber between 0 and 1 
// if r is 0 the the value is =a
// and if r is 1 then the value is =b
//so we reolace (r with Math.random()) and (a with 0 ) and (b with 255)

function getColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getColor();
    e.style.color = getColor();
    e.style.borderColor = getColor();
}
)