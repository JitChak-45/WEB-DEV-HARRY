// function getData() {
//     //simulate promise

//     return new Promise((resolve, reject) => {  //this is not async function
//         setTimeout(() => {
//             resolve(355);
//         }, 4500);
//     })
// }

async function getData() {
    //simulate promise to get data from a server
    let x=fetch('https://jsonplaceholder.typicode.com/todos/1')
   console.log(x);
   return 455;
}

async function main(){


console.log("loading modules");

console.log("Do something else");

console.log("Load data");

let data = await getData()

console.log(data);

console.log("process data") 

console.log("task 2")

}

main()

// data.then((v)=>{ //callback approch but we trey to avoid this 

// console.log(data);

// console.log("process data") 

// console.log("task 2")
// })