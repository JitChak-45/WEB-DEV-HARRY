let prom1=new Promise((resolve, reject) => {
    let r=Math.random();
    if(r<0.5){
       reject("The promise is rejected");
    }
    else{
        resolve("Promise are resolved");
    }
})

prom1.then((a)=>{
    console.log(a);
}
).catch((err)=>{
    console.log(err);
})