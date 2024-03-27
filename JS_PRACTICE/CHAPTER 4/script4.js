
let str = "Please give me RS 1000";
console.log(str);
let a;
for (let i = 0; i < str.length; i++) {
    // In this code, parseInt(str[i]) is used to check if the character at index i can be parsed into a number.
    if (!isNaN(parseInt(str[i]))) {
        // The isNaN function is used to ensure that parseInt(str[i]) does not return NaN (Not a Number). If the character can be parsed into a number, the loop breaks 
        a = i;
        break;
    }
}
console.log(str.slice(a)); // This will output "1000"



// my method 
// let str="Please give me RS 1000";
// console.log(str);
// let a;
// for(let i=0;i<str.length;i++){
//     if(typeof str[i]=='number'){
//         a=i;
//         break;
//     }
// }
// console.log(str.slice(a));