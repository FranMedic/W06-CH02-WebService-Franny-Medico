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
  const parsedUrl = url.parse(request.url, true);
  const { a, b } = parsedUrl.query;
  response.setHeader("Content-Type", "text/html");

  if (
    parsedUrl.pathname === "/calculator/" ||
    parsedUrl.pathname === "/calculator"
  ) {
    response.write(calculator(a, b));
  } else {
    response.write("<h1>CATACLISMO!!, ERROR!!, NO EXISTIMOS AIUDA!!!</h1>");
  }

  response.end();
});
