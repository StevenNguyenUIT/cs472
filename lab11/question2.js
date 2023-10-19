let http = require("http");
let fs = require('fs');


const server = http.createServer((request, response) => {
    let path = request.url;
    if (path.toLowerCase() === '/image'){
        fs.readFile('./image/avatar.png', (err, data) => {
            if (err) {
                response.writeHead(400, { 'Content-type': 'text/html' })
                console.log(err);
                response.end("No such image");
            } else {
                response.writeHead(200, { 'Content-type': 'image/jpg' });
                response.end(data);
            }
        })   
    }
    else if (path.toLowerCase() === '/pdf'){
        fs.readFile('./file/stevennguyen.pdf', (err, data) => {
            if (err) {
                response.writeHead(400, { 'Content-type': 'text/html' })
                console.log(err);
                response.end("No such pdf");
            } else {
                response.writeHead(200, { 'Content-type': 'application/pdf' });
                response.end(data);
            }
        })   
    }
    else if(path === '/' || path.toLowerCase() === '/home'){
        response.end("Welcome to my website");
    }
    else {
        response.writeHead(404);
        response.end("Error 404: Page not found");
    }
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Server has started...');
});
