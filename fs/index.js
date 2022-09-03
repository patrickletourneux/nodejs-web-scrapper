const fs = require('fs-extra')

data = 'tototottoto'
// global.__basedir = __dirname;
// TODO creer une variable d env pour le __dirname
const folder = __dirname;
console.log(folder)

const writeToFile = (fileName, data) => {
    fs.writeFile(`${fileName}.txt`, data, (err) => {
        if (err) throw err;
        console.log(`The file ${fileName}.txt has been saved!`);
    });
}

// writeToFile('test', data)

module.exports = writeToFile;