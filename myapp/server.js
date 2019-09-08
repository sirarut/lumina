const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('End\n');
});

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: 'password',
    database: 'lumina'
  });

connection.connect((err) => {
    if (err) {
        throw err;
    }  
    console.log('Connected!');
    
});

server.listen(port, hostname, function() {
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});