// Filee sending
const fs = require("fs");
const path = require("path");

function saveFile(name, buffer) {
    const filePath = path.join(__dirname, "../../storage/files", name);
    fs.writeFileSync(filePath, buffer);
}

module.exports = { saveFile };