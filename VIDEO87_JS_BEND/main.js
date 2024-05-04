const fs = require("fs");
const fs = require("fs/promises");

// console.log(fs);
console.log("Starting");

//when we use it ,its break js asynchronus nature ->
// fs.writeFileSync("Jit.txt","Jit is a good boy");
fs.writeFile("Jit2.txt", "Today Rohit's Birthday", () => {
    console.log("Done");
    fs.readFile("Jit2.txt", (err, data) => {
        console.log(err, data.toString());
    })
});

fs.appendFile("Jit2.txt"," Ro 45",(e,d)=>{
    console.log(d);
})
console.log("Ending");

