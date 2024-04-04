// console.log("<------JavaScript Asynchronus Nature-------->");
// console.log("Harry is a Hacker!")
// console.log("Jit is a Hacker!")

// setTimeout(()=>{
// console.log("Inside of timeout function")
// },1000)

// console.log("The end of program");

console.log("<------JavaScript callback function-------->");

// const fn = () => {
//     console.log("I am another function");
// }

// const callback = (arg, fn) => {
//     console.log(`My name is ${arg}`);
//     fn();
// }

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Jit",fn);
    document.head.append(sc);
}

// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

//why we use promises=> to escape pyramid of doom in callback function
// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn) => {
//     console.log(`My name is ${arg}`);
//     fn( () => {
//         console.log("Hey ! I am second function")
//         ddg( () => { //this is call pyramid of doom
//             console.log("Hey ! I am third function")
//         })
//     })
// })


