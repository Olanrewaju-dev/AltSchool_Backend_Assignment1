const http = require('http');
const port = 3300;
const hostname = "localhost";

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write("Hello World!");
    res.end();
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`);
})




