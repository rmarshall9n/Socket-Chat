const express = require("express");
const socket = require("socket.io");
const app = express();

const server = app.listen("3000", function() {
  console.log("listening on 3000");
});

app.use(express.static("public"));

var io = socket(server);

io.on("connection", function(socket) {
  console.log("connected", socket.id);
});
