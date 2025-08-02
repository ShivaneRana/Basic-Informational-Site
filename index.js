import fs from 'fs/promises';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", async(req,res) => {
    const src = `public/index.html`;
    const page = await fs.readFile(src,{encoding:"utf-8"});
    res.status(200);
    res.set({'Content-Type':'text/html'});
    res.send(page);
});

app.get("/about.html", async(req,res) => {
    const src = `public/about.html`;
    const page = await fs.readFile(src,{encoding:"utf-8"});
    res.status(200);
    res.set({'Content-Type':'text/html'});
    res.send(page);
});

app.get("/contact-me.html", async(req,res) => {
    const src = `public/contact-me.html`;
    const page = await fs.readFile(src,{encoding:"utf-8"});
    res.status(200);
    res.set({'Content-Type':'text/html'});
    res.send(page);
});

app.get("/style.css", async(req,res) => {
    const src = `public/style.css`;
    const page = await fs.readFile(src,{encoding:"utf-8"});
    res.status(200);
    res.set({'Content-Type':'text/css'});
    res.send(page);
});

app.use(async (req,res) => {
    const src = `public/404.html`;
    const page = await fs.readFile(src,{encoding:"utf-8"});
    res.status(404);
    res.set({'Content-Type':'text/html'});
    res.send(page);
}) 

app.listen(port,() => {
    console.log(`http://localhost:${port}`)
})