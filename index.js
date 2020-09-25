const http = require('http');
const { readFile } = require('./fs_read');

const app = (req, res) =>{
    //Event Listeners
    res.on('close', ()=>{ console.log(req.method, req.url, res.statusCode)});
    req.on('error', error => { console.log(req.error) });

    //Routes
    if(req.url == '/about') return readFile(res, 200, './html/about.html');
    if(req.url == '/contact-me') return readFile(res, 200, './html/contact_me.html');
    if(req.url == '/') return readFile(res, 200, './html/index.html');
    
    return readFile(res, 404, './html/404.html');
};

//Create Server for the App
http.createServer(app)
    .listen(8080);

