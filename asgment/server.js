const http = require('http');
const os=require('os');
const fs=require('fs');
const route=require("./routing")

const server=http.createServer(route)
    



server.listen(3000,()=>{
    console.log(`server listening on ${3000}`)
})