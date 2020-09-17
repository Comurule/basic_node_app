const fs = require('fs');

exports.readFile = (res, filePath) => {
    return fs.readFile(filePath, (err, data) => {
        if(err) throw err;
        res.writeHead(200, {'Content-type': 'text/html'});
        return res.end(data);
    })
};