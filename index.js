require("dotenv").config();

const { program } = require("commander");
const http = require("http");
const url = require("url");
const calculator = require("./calculator");

program.option("-p, --port <port>");
program.parse(process.argv);

const server = http.createServer();

let port;

if (program.opts().port && !Number.isNaN(program.opts().port)) {
  port = program.opts().port;
} else {
  port = process.env.SERVER_PORT_CALCULATOR || 6000;
}

server.listen(port);

server.on("request", (request, response) => {
  if (request.url !== "/favicon.ico") {
    const parsedUrl = url.parse(request.url, true);
    const { a, b } = parsedUrl.query;
    response.setHeader("Content-Type", "text/html");

    if (
      parsedUrl.pathname === "/calculator/" ||
      parsedUrl.pathname === "/calculator"
    ) {
      response.statusCode = 200;
      response.write(calculator(a, b));
    } else {
      response.statusCode = 404;
      response.write(
        "<h1>CATACLISMO!!, ERROR!! AYUDAAA!!!!! NO EXISTIMOS </h1>"
      );
    }

    response.end();
  }
});
