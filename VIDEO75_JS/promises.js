// console.log('This is promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("This is not supporting you");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done");
            resolve("Harry")
        }, 1000);
    }

})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("This is not supporting you2");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done2");
            resolve("Harry2")
        }, 2000);
    }

})
let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("This is not supporting you3");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done3");
            resolve("Harry3")
        }, 3000);
    }

})
let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("This is not supporting you4");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done4");
            resolve("Harry4")
        }, 4000);
    }

})
let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("This is not supporting you5");
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done5");
            resolve("Harry5")
        }, 5000);
    }

})

// prom1.then((a) => {
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })

//promise.all---->
// let p=Promise.all([prom1,prom2,prom3,prom4,prom5]);

// p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

//promise.allSetteled---->
// let p=Promise.allSettled([prom1,prom2,prom3,prom4,prom5]);

// p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

//promise.race---->
// let p=Promise.race([prom1,prom2,prom3,prom4,prom5]);

// p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

//promise.any---->
// let p=Promise.any([prom1,prom2,prom3,prom4,prom5]);

// p.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })

Promise.resolve(prom1);



