import express from 'express'
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    // res.json("./public/jit.json");
    res.send('Hello World!45')
})
app.get('/contact', (req, res) => {
    res.send('contact us')
})
app.get('/about', (req, res) => {
    res.send('About Us!')
})
app.get('/project', (req, res) => {
    res.send('Projects!')
})

app.get('/blog/:slug/', (req, res) => {
    console.log(req);
    console.log(req.params);
    console.log(req.query);
    res.send(`Hello World ${req.params.slug}`);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})