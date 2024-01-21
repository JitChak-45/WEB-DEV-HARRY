let a=5;
let b=7;

// operators

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//asignments operator
console.log("asignments operator");
let c=5;
console.log(++c);
console.log(--c);
console.log(c*=2);
console.log(c/=2);
console.log(c **=2);

// comparison operator

console.log("comparison operator");

console.log(3=="3");
console.log(3==="3");
console.log(4!=3);
console.log(4>=3);
console.log(4<=3);
console.log(4<3);
console.log(4>3);
console.log("3"!=="3");


//logical operator and if and else and else if
console.log("logical operator and if and else and else if");

let age=18;

if(age>=18 && age <=69){
    console.log("You can drive");
}
else if(age>17 || age<65){
    console.log("You have capabilities to drive");
    
}
else if(age !=0){
    console.log("are you kidding");
}
else{
    console.log("you can't drive");
}

//ternary operator

console.log("Ternary Operator");
let g=9;
let h=8;

let n=(g>h)?(g-h):(h-g);
console.log(n);



