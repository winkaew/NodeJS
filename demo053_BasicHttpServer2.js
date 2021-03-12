const http = require('http')
const fs = require('fs')

function sendError(response) {
    response.writeHead(404, { 'Content-Type': 'text/plain' })
    response.write('Error 404 !!!')
    response.end()
}
http.createServer(function (req, res) {
    if (req.method == 'GET' && req.url == '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        fs.createReadStream('./public/index.html').pipe(res)
    } else {
    sendError(res)
}}).listen(3003)

console.log('Server Run Complete!!')