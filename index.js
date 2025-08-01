import http from 'http';
import fs from 'fs/promises';
import axios from 'axios';


const server = http.createServer();

server.on("request", async(req,res) => {
    // index page
    if(req.url === '/' || req.url === '/index'){

        const indexSrc = `public/index.html`;
        const indexPage = await fs.readFile(indexSrc,{encoding:"utf-8"});
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(indexPage);

    
    // about page
    }else if(req.url === '/about.html'){

        const aboutSrc = `public/about.html`;
        const aboutPage = await fs.readFile(aboutSrc,{encoding:"utf-8"});
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(aboutPage);
    

    // contact page
    }else if(req.url === '/contact.html'){

        const contactSrc = `public/contact.html`;
        const contactPage = await fs.readFile(contactSrc,{encoding:"utf-8"});
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end(contactPage);
    

    // stylesheet 
    }else if(req.url === '/style.css'){

        const cssSrc = `public/style.css`;
        const cssFile = await fs.readFile(cssSrc,{encoding:"utf-8"});
        res.writeHead(200,{'Content-Type':'text/css'});
        res.end(cssFile);
    
    // error page || 404 page
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

    setTimeout(() => {

        axios.get("http://localhost:8080").then(res => {
            console.log(`server response: ${res.statusText}`);
            console.log(`server code: ${res.status}`)
        }).catch(err => {
            console.error(err.message);
        })

    },500)
})