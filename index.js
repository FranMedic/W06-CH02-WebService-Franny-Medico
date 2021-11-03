const http = require("http");

const server = http.createServer();

server.listen(5000);

server.on("request", (request, response) => {
  console.log("Una request salvaje apareció");
  response.setHeader("Content-Type", "application/json");
  response.write("Holi toy biba");
  console.log("llegue");
  response.end();
});
