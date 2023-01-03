const {readFile, readFileSync} = require('fs');

const txt = readFileSync('./hello.txt', 'utf8');

const names = readFile('./hello.txt', 'utf8', (error, text) => {
    console.log(text);
});