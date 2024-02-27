const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  res.setHeader("Content-Type", "text/html");
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Post Value</title></head>");
    res.write("<body>")
    res.write(
      " <div><p>Hello world</p> <form action='/message' method='POST'><input type='text'  name='message'/> <input type='text' name='user'/> <button type='submit'>Submit</button></form> </div>"
    );
     fs.readFile('message.md',(err,data)=>{
        if(data){
            var parsedData=JSON.parse(data);
            console.log(parsedData)
            res.write(`<p>user:${parsedData.user}</p>`)
            
        }
     })
     res.write("</body>")
    res.write("</html>");

    res.end();
  } else if (url == "/message" && method == "POST") {
    const body = [];
    req.on("data", (chunk) => {
    //   console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const messageArray = parsedBody.split("&");
      const messageData = {};
      for (var i = 0; i < messageArray.length; i++) {
        var [key, value] = messageArray[i].split("=");
        messageData[key] = decodeURIComponent(value);
      }
      fs.writeFile("message.md", JSON.stringify(messageData), (err) => {
        if (err) {
            console.log(err)
          res.statusCode = 501;
          res.end("Internal Server Error");
        } else {
          res.setHeader("Location", "/");
          res.statusCode = 302;
          return res.end();
        }
      });
    });
  }
});
server.listen(3000, () => {
  console.log("Server listening on 3000");
});
