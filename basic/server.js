var websocketServer = require("ws").Server,
    wss = new websocketServer({ port: 8181 });

wss.on('connection', function (ws) {
    console.log("Client connected")
    ws.on('message', function (message) {
        console.log("Received: %s", message);
       // ws.send(message);
    });
});