let random = Math.random();

console.log(random);

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter what operation you want to be done");

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
};

if (random > 0.1) {
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);//``-->backtick ${a}-->string interpolation
} else {
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
