import http from 'http';
import fs from 'fs/promises';
import axios from 'axios';


const server = http.createServer();

server.on("request", async(req,res) => {
    if(req.url === '/' || req.url === '/index'){
        const indexSrc = `public/index.html`;
        const indexPage = await fs.readFile(indexSrc,{encoding:"utf-8"});
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(indexPage);
    }else if(req.url === '/style.css'){
        const cssSrc = `public/style.css`;
        const cssFile = await fs.readFile(cssSrc,{encoding:"utf-8"});
        res.writeHead(200,{'Content-Type':'text/css'});
        res.end(cssFile);
    }else{
        const errorSrc = `public/404.html`;
        const errorPage = await fs.readFile(errorSrc,{encoding:"utf-8"});
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(errorPage);
    }
})


const port = 8080

server.listen(port,() => {
    console.log(`http://localhost:${port}`)

    axios.get("http://localhost:8080").then(res => {
        console.log(`StatusText: ${res.statusText}`);
    }).catch(err => {
        console.error(err.message);
    })
})