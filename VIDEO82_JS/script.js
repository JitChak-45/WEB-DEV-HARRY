async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    })
}
// let a=await sleep();
// let b=await sleep();

function sum(a,b,c){
    return a+b+c;
}
//IIFE-->Immediately Invoke Function Expression
(async function main() {
    // let a=await sleep();
    // console.log(a);
    // let b=await sleep();
    // console.log(b);

    //destruction-->
    // let x,y=[1,5];
    // let [x,y]=[1,5];
    // let [x,y]=[1,5,7];
    // let [x,y,...rest]=[1,5,7,8,9,11];
    // let [x,y,rest]=[1,5,7,8,9,11];
    // console.log(x,y,rest);

    //now **destruction for objects**-->
    // let obj = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }
    // let {a,b}=obj;
    // console.log(a,b);


    //**spread syntax**-->
    // const arr=[1,2,3];
    // const obj={...arr};
    // console.log(obj);

    let arr=[2,9,10];
    console.log(sum(arr[0],arr[1],arr[2]));
    console.log(sum(...arr));

    //hoisting remaining
})();