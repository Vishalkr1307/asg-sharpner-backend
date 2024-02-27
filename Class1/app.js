// const http=require("http")
// const os=require("os");

// const server=http.createServer((req,res)=>{
    
//     res.statusCode=200
//     res.setHeader('Content-Type', 'application/json')
//     res.end("Hello world!");
// })
// const cpus = os.cpus();
// console.log('CPUs:', cpus);

// // Get the total amount of system memory
// const totalMemory = os.totalmem();
// console.log('Total memory:', totalMemory, 'bytes');

// // Get the amount of free system memory
// const freeMemory = os.freemem();
// console.log('Free memory:', freeMemory, 'bytes');

// // Get the hostname of the operating system
// const hostname = os.hostname();
// console.log('Hostname:', hostname);

// // Get information about each network interface
// const networkInterfaces = os.networkInterfaces();
// console.log('Network interfaces:', networkInterfaces);

// // Get the default directory for temporary files
// const tempDir = os.tmpdir();
// console.log('Temporary directory:', tempDir);

// // Get information about the current user
// const userInfo = os.userInfo();
// console.log('User info:', userInfo);


// server.listen(3000,()=>{
//        console.log("list running to server")
//  })
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const url = req.url;

    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home</title></head>');
        res.write('<body><p>Welcome to the home</p></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>About</title></head>');
        res.write('<body><p>Welcome to the About page</p></body>');
        res.write('</html>');
       return res.end();
    } else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node</title></head>');
        res.write('<body><p>Welcome to the Node page</p></body>');
        res.write('</html>');
       return res.end();
    } else {
        // Default response for any other URL
        res.write('<html>');
        res.write('<head><title>Let Learn Node</title></head>');
        res.write('<body><h1>Hello World</h1></body>');
        res.write('</html>');
        res.end();
    }
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

