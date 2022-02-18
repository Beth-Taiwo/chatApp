var io = require("socket.io")(8080);

io.on("connection", (socket) => {
  console.log("working...");
  socket.emit("chat-message", "Hello World");
});
