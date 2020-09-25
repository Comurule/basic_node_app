const http = require('http');
const { readFile } = require('./fs_read');

const app = (req, res) =>{
    //Event Listeners
    req.on('close', ()=>{ console.log(res.statusCode, req.url)});
    req.on('error', error => { console.log(error) });

    //Routes
    routeToFile(req, res, '/about', './html/about.html');
    routeToFile(req, res, '/contact-me', './html/contact_me.html');
    routeToFile(req, res, '/', './html/index.html');
    
    return readFile(res, './html/404.html');
};

const routeToFile = (req, res, url, filePath) => {
    if(req.url == url) return readFile(res, filePath);
};

http.createServer(app)
    .listen(8080);

