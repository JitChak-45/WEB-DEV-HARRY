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
    // let x= await fetch('https://jsonplaceholder.typicode.com/todos/1');
    // let data=await x.json(); //parsing of data
    let x= await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
       
    let data=await x.json();
   console.log(data);
   return x;
}

async function main(){


console.log("loading modules");

console.log("Do something else");

console.log("Load data");

let data = await getData()
// let data = getData()

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

/***settle** means promise is resolve or reject
 if the promise is resolved then the promise is settled sucessfull
 and if reject then the promise does not resolve sucessfull
*/

// Example POST method implementation:
// async function postData(url = "", data = {}) {
//     // Default options are marked with *
//     const response = await fetch(url, {
//       method: "POST",
      
//       headers: {
//         "Content-Type": "application/json",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: JSON.stringify(data), 
//     });
//     return response.json(); 
//   }
  
//   postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });
  