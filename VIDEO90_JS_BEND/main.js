//middleware-> Middleware is a thing which modify request

const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog.js')

const fs = require('fs');

app.use('/blog', blog)
// app.use(express.static("public"));

//ghow to make own middleware-->
//make a function with a shown paramerter req,res,next
//then use it app.use(function)
//there is also a direct path to use -->app.use(arrow function)

//method --1
/*const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

app.use(myLogger)*/

//method --2.....Middleware 1
app.use((req, res, next) => {
  // console.log('m1')

  req.harry = "I am Jit bhai";

  //conversion of unix timestamp into time
  const myDate = new Date(Date.now());
  const myDateString = myDate.toLocaleDateString() + " " + myDate.toLocaleTimeString();

  fs.appendFileSync("logs.txt", `${myDateString} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`);
  // res.send("Hacked by middleware 1");
  next()
}
)
//Middleware 2
app.use((req, res, next) => {
  req.harry = "I am harry bhai";
  console.log(req.headers)
  console.log('m2')
  next()
}
)


app.get('/', (req, res) => {
  res.send('Hello World!' + req.harry)
})
app.get('/about', (req, res) => {
  res.send('Hello About!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})