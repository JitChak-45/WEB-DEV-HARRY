const fs = require("fs");

fs.writeFile("Jit2.txt", "Today Rohit's Birthday", () => {
    console.log("Done");
    fs.readFile("Jit2.txt", (err, data) => {
        console.log(err, data.toString());
        //callback hell
        fs.writeFile("Jit2.txt", "Today Rohit's Birthday", () => {
            console.log("Done");
            fs.readFile("Jit2.txt", (err, data) => {
                console.log(err, data.toString());
                fs.writeFile("Jit2.txt", "Today Rohit's Birthday", () => {
                    console.log("Done");
                    fs.readFile("Jit2.txt", (err, data) => {
                        console.log(err, data.toString());
                        fs.writeFile("Jit2.txt", "Today Rohit's Birthday", () => {
                            console.log("Done");
                            fs.readFile("Jit2.txt", (err, data) => {
                                console.log(err, data.toString());
                            })
                        });
                    })
                });
            })
        });

    })
});