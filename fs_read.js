const fs = require('fs');

exports.readFile = (res, statusCode, filePath) => {
    return fs.readFile(filePath, (err, data) => {
        if(err) throw err;
        res.writeHead( statusCode , {'Content-type': 'text/html'});
        return res.end(data);
    })
};