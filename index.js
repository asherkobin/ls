require("dotenv").config();
const server = require("./api/server");
const portNum = process.env.PORT || 6000;

server.listen(portNum, () =>
  console.log(`** Express Running on ${portNum} **`)
);
