import fs from 'fs-extra';
import config from '../config'

export default  {
    writeTextToFile (fileName : string, data = 'string') {
        fs.writeFile(`${config.dirName}/userCreatedFiles/${fileName}.txt`, data, (err) => {
            if (err) {
                console.log(err)
                throw err;
            }
            console.log(`The file ${fileName}.txt has been saved!`);
        });
    }
}


// const t = 'tt'
// writeToFile(t,t)
