const WebSocket = require("ws");
const { getIdentity } = require("../../core/identity");
const { createMessage } = require("../../core/protocol");
const PORT = 3000;
const wss = new WebSocket.Server({ port: PORT });

const peers = [];

wss.on("connection", (ws) => {
    peers.push(ws);

    ws.on("message", (data) => {
        const msg = JSON.parse(data);

        //Brodcast to all peers
        peers.forEach(peer => {
            if (peer !== ws && peer.readyState === WebSocket.OPEN) {
                peer.send(JSON.stringify(msg));
            }
        });
    });

    ws.on("close", () => {
        const index = peers.indexOf(ws);
        if (index > -1) peers.splice(index, 1);
    });
});

console.log('MMM node running on ws://localhost:${PORT}');