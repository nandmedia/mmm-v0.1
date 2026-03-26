const WebSocket = require("ws");
const readline = require("readline");
const { getIdentity } = require("../../core/identity");
const { createMessage } = require("../../core/protocol");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const identity = getIdentity();

const ws = new WebSocket("ws:127.0.0.1:5500");

ws.on("open", () => {
    console.log("Connected to MMM node");

    rl.on("line", (input) => {
        const msg = createMessage("chat", { text: input }, identity.id);
        ws.send(JSON.stringify(msg));
    });
});

ws.on("message", (data) => {
    const msg = JSON.parse(data);
    console.log('\n[${msg.sender}] ${msg.payload.text');
});