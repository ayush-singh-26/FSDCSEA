const { log } = require('console');
const fs = require('fs');

const writeData = (data) => {
    try {
        fs.writeFileSync('data.txt', data);
        console.log("Data is written successfully");
    } catch (error) {
        console.log("Error occrured during writing data", err);
    }
}
const readData = () => {
    try {
        const frd = fs.readFileSync('data.txt', { encoding: 'utf8' });
        console.log(frd);
    } catch (error) {
        console.log("Error occrured during reading data", err);
    }
}

const appendedData = (data) => {
    try {
        fs.appendFileSync('data.txt', data)
        console.log('Data is appended');
    } catch (error) {
        console.log("Error occurred during appending data", err);
    }
}

const unlinkSync = () => {
    try {
        fs.unlinkSync('data.txt');
    } catch (error) {
        console.log("Error occurred during deleting file", err);
    }
}

const obj = {
    writeData: writeData,
    readData: readData,
    appendedData: appendedData,
    unlinkSync: unlinkSync
}

module.exports = obj;


