// module.exports = "My Exported Module";

// const filePath = path.join(process.cwd(), "file.txt");

const fs = require("fs");
const path = require("path")

function getFilePath() {
    return path.join(process.cwd(), "file.txt");
}

function writeToFile(filePath, string) {
    fs.writeFileSync(filePath, string);
}

function readFromFile(filePath) {
 return fs.readFileSync(filePath).toString();

}

exports.getFilePath = getFilePath;
exports.writeToFile = writeToFile;
exports.readFromFile = readFromFile;
