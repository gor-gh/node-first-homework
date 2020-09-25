const fs = require('fs');
Promise = require('bluebird').Promise;
//
// const readFileAsync = Promise.promisify(fs.readFile);

module.exports = function doThat(fileName) {
    const dataArray = fs.readFileSync(fileName).toString().split('\n');
    for(let row of dataArray) {

        const rowArr = row.split('=');
        if(rowArr[0][0] === "#") continue;
        process.env[rowArr[0]] = rowArr[1];
    }
}
