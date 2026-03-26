// Simple device ID
const { v4: uuid } = require("uuid");
const fs = require("fs");

const FILE = "./storage/device.json";

function getIdentity() {
    if (fs.existsSync(FILE)) {
        return JSON.parse(fs.readFileSync(FILE));
    }

    const id = { id: uuid() };
    fs.writeFileSync(FILE, JSON.stringify(id));
    return id;
}

module.exports = { getIdentity };