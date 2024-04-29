// const http = require('node:http');
//by the help of require we import the mocule-->this is done by common js
// const fs=require("fs");
import http from "http"

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<b>I am a Fan Of   Ro 45</b>');
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });