const http = require('http');
const { readFile } = require('./fs_read');

const app = (req, res) =>{
    if(req.url == '/about') return readFile(res, './html/about.html');
    if(req.url == '/contact-me') return readFile(res, './html/contact_me.html');
    if(req.url == '/') return readFile(res, './html/index.html');

    return readFile(res, './html/404.html');
};

http.createServer(app)
    .listen(8080);

