"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_extra_1 = __importDefault(require("fs-extra"));
const config_1 = __importDefault(require("../config"));
exports.default = {
    writeTextToFile(fileName, data = 'string') {
        fs_extra_1.default.writeFile(`${config_1.default.dirName}/userCreatedFiles/${fileName}.txt`, data, (err) => {
            if (err) {
                console.log(err);
                throw err;
            }
            console.log(`The file ${fileName}.txt has been saved!`);
        });
    }
};
// const t = 'tt'
// writeToFile(t,t)
