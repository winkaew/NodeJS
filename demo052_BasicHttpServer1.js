const http = require('http')

// ข้อดีของ HTTP คือทำตัวเป็น server พร้อมรับ request 
// และส่ง response กลับไปที่ client
// .createServer กำหนดให้ Application ทำหน้าที่เป็น Server
// .createClient กำหนดให้ Application ทำหน้าที่เป็น Client

var server = http.createServer(function (req, res) {   
    if (req.url == '/') {         
        // response header
        res.writeHead(200, { 'Content-Type': 'text/html' })       
        // response content    
        res.write
        ('<html><body><p>Welcome to NodeJS Programming</p></body></html>')
        res.end()
    }
    else if (req.url == "/student") {        
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<html><body><p>::: Welcome to Student :::</p></body></html>')
        res.end()   
    }
    else if (req.url == "/admin") {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<html><body><p>::: Welcome to Administrator :::</p></body></html>')
        res.end()
    }
    else
        res.end('Error 404!!!!')
});

server.listen(3000); 
console.log('Web server at port 3000 is running!!')

// http://127.0.0.1:3000/