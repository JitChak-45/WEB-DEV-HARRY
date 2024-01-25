let a="Jit";

//to show the char at index i
console.log(a[0]);
console.log(a.charAt(1));

//string length
console.log(a.length);


let first_name="Jit";
let last_name="Chakraborty";

console.log("My name is "+first_name+" And my surname is "+last_name);
//`` --> this is called templete leterel && ${}  --> is called string interpolation
console.log(`My name is ${first_name} and my surname is ${last_name}`);


// console.log("Jit"chak");  //this cause error

//escape sequence
console.log("Jit\"chak");
//new line
console.log("Jit\nchak");
//tab
console.log("Jit\tchak");

//toUpperCase() and toLowerCase() function
console.log(a.toUpperCase());
console.log(a.toLowerCase());

//slice(1,4) here 1 include and 4 exclude
let c="prabir";
console.log(c.slice(0,3));
//slice(1) starts from 1 index and ends at the end of the string
console.log(c.slice(1));

//replace
console.log(c.replace("bir","bor"));

//concat

let d="srabanti";
console.log(c.concat(d,a,"ipsita"));

//trim function trim extra spaces
let x="   space   ";
console.log(x.trim());

let z="splice";

console.log(z.startsWith("sp"));
console.log(z.endsWith("ce"));

//string is immutable && explore other methods in string