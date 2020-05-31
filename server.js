const http = require("http");
const url = require("url");

const service = require("./service.js");

const hostname = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 9001;

http
  .createServer((req, res) => {
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == "/user" && req.method == "GET") {
      console.log(
        "Request Type: " + req.method + "Endpoint: " + reqUrl.pathname
      );
      service.displayGetRequestHandler(req, res);
    } else if (reqUrl.pathname == "/user" && req.method == "POST") {
      console.log(
        "RequestType: " + req.method + "Endpoiint: " + reqUrl.pathname
      );
      service.displayPostRequestHandler(req, res);
    } else {
      console.log(
        "Request Type: " + req.method + "Invalid Endpoint: " + reqUrl.pathname
      );
      service.invalidRequest(req, res);
    }
  })
  .listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
