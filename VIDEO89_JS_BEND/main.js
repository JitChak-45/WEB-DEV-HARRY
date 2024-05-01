const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')

const app = express()
const port = 3000

app.use(express.static('public'))

app.use('/blog', blog)
app.use('/shop', shop)

// app.get('/', (req, res) => {
//   console.log("hey! it is a get request");
//   res.send('Hello World2!')
// })

// app.post('/', (req, res) => {
//   console.log("hey! it is a Post request");
//   res.send('Hello World post!')
// })

// app.put('/', (req, res) => {
//   console.log("hey! it is a Put request");
//   res.send('Hello World put!')
// })

// app.delete('/', (req, res) => {
//   console.log("hey! it is a Delete request");
//   res.send('Hello World delete!')
// })

//same thing like above--->
app.get('/', (req, res) => {
  console.log("hey! it is a get request");
  res.send('Hello World23!')
}).post('/', (req, res) => {
  console.log("hey! it is a Post request");
  res.send('Hello World post!')
}).put('/', (req, res) => {
  console.log("hey! it is a Put request");
  res.send('Hello World put!')
}).delete('/', (req, res) => {
  console.log("hey! it is a Delete request");
  res.send('Hello World delete!')
})

app.get("/index", (req, res) => {
  console.log("Hey! it is a index");
  // res.send('Hello World Index!')
  //when i want to get the index.html file--->
  res.sendFile('templates/index.html', {root:__dirname});
})

app.get("/api", (req, res) => {
  console.log("Hey! it is a res.json()");
  
  res.json({a:1,b:2,c:3,d:4,name:["Harry","Jit"]});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})