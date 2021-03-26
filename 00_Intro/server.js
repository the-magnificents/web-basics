const http = require('http');
const fs = require('fs')

const PORT = 8080


const requestListener = function (req, res) {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('index.html').pipe(res)
}

const server = http.createServer(requestListener);
server.listen(PORT);
console.log("Listenning in port: " + PORT)