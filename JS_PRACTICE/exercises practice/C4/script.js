
// javascript asynchronus nature

console.log("First");
console.log("Second");
setTimeout(() => {
    console.log("Third");
}, 100);
console.log("Fourth");

//callback in js
const fn=(fname)=>{
    console.log(`My father name is ${fname}`)
}
const callback=(arg,fn)=>{
    console.log(`My name is ${arg}`);
    fn("Prabir");
}

function loadScript(src,callback){
let sc=document.createElement("script");
sc.src=src;
sc.onload=callback("Jit",fn);
document.head.append(sc);
}
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);



