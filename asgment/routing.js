const { isUtf8 } = require('buffer');
const fs = require('fs');

const handleRouting = (req, res) => {
    const url = req.url;
    const method = req.method;
    res.setHeader('Content-Type', 'text/html');

    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Node js</title></head>");
        res.write("<body>");
        res.write(`<div>
           <form action="/message" method="POST">
            <input type="text" name="user"/>
            <input type="text" name="message"/>
            <button type="submit">Submit</button>
           </form>
        </div>`);
        res.write("</body>");
        res.write("</html>");
        return res.end();
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on("data", (chunk) => {
            body.push(chunk);
        });
        req.on("end", () => {
            const parseData = Buffer.concat(body).toString();
            const parsedMsg = parseData.split("&");
            const obj = {};
            for (let i = 0; i < parsedMsg.length; i++) {
                const [key, value] = parsedMsg[i].split("=");
                obj[key] = decodeURIComponent(value); // Decode URI component
            }
            fs.writeFile("readme.md", JSON.stringify(obj), (err) => {
                if (err) {
                    res.statusCode = 500; // Set status code to 500 if there is an error
                    return res.end("internal server error");
                }
                fs.readFile("readme.md", isUtf8, (err, data) => {
                    if (err) {
                        res.statusCode = 500;
                        return res.end("internal server error");
                    }
                    const parsedData = JSON.parse(data);
                    res.write('<html>');
                    res.write('<head>');
                    res.write("<title>message</title>");
                    res.write('</head>');
                    res.write('<body>');
                    res.write(`<p>THis is a message Page</p>`);
                    res.write(`<p>User: ${parsedData.user}</p>`); // Corrected variable name
                    res.write('</body>');
                    res.write('</html>');
                    res.end(); // End the response after writing content
                });
            });
        });
    }
}

module.exports = handleRouting;
