// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<b>I am a Fan Of   Ro 45</b>');
// });
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
//   });


const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))//the 'public' name should be same as folder name where the file is located which is public  

//app.get or app.post or app.put or app.delete(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World2!')
})

app.get('/about', (req, res) => {
    res.send('About Us!')
})

app.get('/contact', (req, res) => {
    res.send('Contact Me!')
})

app.get('/blog', (req, res) => {
    res.send('This is a blog!')
})
// parameter and quaries--->

app.get('/blog/:slug', (req, res) => {
    //logic to fetch ${slug} from db
    // console.log(req);
    //params comes in url as variable

    // for this url->http://localhost:3000/blog/jit?mode=dark&region=in
    console.log(req.params);
    console.log(req.query);

    // output-- >
    //     { slug: 'jit' }
    // { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`);

    // params and query---->
    //     params: { slug: 'h' },
    //   query: { mode: 'dark', region: 'in' },
})

app.get('/blog/:slug/:second', (req, res) => {
    //logic to fetch ${slug} from db
    res.send(`Hello ${req.params.slug} and ${req.params.second}`);
})

// app.get('/blog/intro-to-js', (req, res) => {
//logic to fetch intro to js from db
//     res.send('This is a blog about intro-to-js!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//logic to fetch intro to python from db
//     res.send('This is a blog about intro-to-python!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})