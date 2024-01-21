console.log("What operation you want to perform");
console.log("Press 1 : For Addition");
console.log("Press 2 : For Substraction");
console.log("Press 3 : For Multiplication");
console.log("Press 4 : For Division");

// const ch=prompt("Enter your choice");

// console.log("Enter two numbers");
// let a=prompt("First Number");
// let b=("Second Number");

let a = 5;
let b = 4;

const add = (a, b) => {
    console.log("The result is ", a + b);
};
const minus = (a, b) => {
    console.log("The result is ", a - b);
};
const multiply = (a, b) => {
    console.log("The result is ", a * b);
};
const divide = (a, b) => {
    if(b!=0){
        console.log("The result is ", a / b);
    }
    else{
        console.log("Some error in input");
    }
    
};

let ch = 1;

//this is the catch where 10% of times it gives wrong ans Math.random() < 0.1 
if (!(Math.random() < 0.1)) {
    if (ch == 1) {
        add(a, b);
    }
    if (ch == 2) {
        minus(a, b);
    }
    if (ch == 3) {
        multiply(a, b);
    }
    if (ch == 4) {
        divide(a, b);
    }
} else {
    if (ch == 1) {
        minus(a, b);
    }
    if (ch == 2) {
        divide(a, b);
    }
    if (ch == 3) {
        add(a, b);
    }
    if (ch == 4) {
        console.log("The division result is ", a ** b);
    }
}
