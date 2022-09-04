const fs = require('fs-extra');
const config = require('../config');

const writeTextToFile = (fileName, data = 'string') => {
    fs.writeFile(`${config.dirName}/userCreatedFiles/${fileName}.txt`, data, (err) => {
        if (err) {
            console.log(err)
            throw err;
        }
        console.log(`The file ${fileName}.txt has been saved!`);
    });
}

// const t = 'tt'
// writeToFile(t,t)

module.exports = writeTextToFile;