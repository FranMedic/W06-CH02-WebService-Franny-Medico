require("dotenv").config();

const http = require("http");
const url = require("url");
const calculator = require("./calculator");

const server = http.createServer();
const port = process.env.SERVER_PORT_CALCULATOR || 6000;

server.listen(port);

server.on("request", (request, response) => {
  console.log("Una request salvaje apareció");

  const { a, b } = url.parse(request.url, true).query;
  response.setHeader("Content-Type", "text/html");
  response.write(calculator(a, b));
  console.log("Me voy a ir yendo");

  response.end();
});
