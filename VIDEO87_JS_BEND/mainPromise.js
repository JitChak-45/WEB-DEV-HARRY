import fs from "fs/promises"

let a=await fs.readFile("Jit2.txt");

let b=await fs.writeFile("harry.txt","\n\n\nYou are my Captain");

let c=await fs.appendFile("Jit2.txt","\n\n\nYou are my Captain");
console.log(a.toString());