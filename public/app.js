var socket = io.connect("http://localhost:3000/");

var message = document.getElementById("message"),
  output = document.getElementById("output"),
  handle = document.getElementById("handle"),
  feedback = document.getElementById("feedback"),
  send = document.getElementById("send");

send.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
  message.value = "";
});

message.addEventListener("keydown", function() {
  socket.emit("typing", {
    handle: handle.value
  });
});

socket.on("chat", function(data) {
  feedback.innerHTML = "";
  output.innerHTML +=
    "<p><em>" + data.handle + ":</em> " + data.message + "</p>";
});

socket.on("typing", function(data) {
  feedback.innerHTML = "<p><em>" + data.handle + " is typing...</em></p>";
});
