const http = require("http");
const url = require("url");


const server = http.createServer((req, res) => {
    if(req.url=="/")
    {
        res.end("Hello babu yes No whats");
    }
    else if(req.url=="/about")
    {
        res.end("About");
    }
    else
    {
        res.writeHead(404, {"Content-type" : "text/html"});
        res.end("404 error");
    }
});

server.listen(3000, "127.0.0.1", () => {
    console.log("listening");
});