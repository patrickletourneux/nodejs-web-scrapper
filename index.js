"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompts = require('prompts');
const questions_1 = __importDefault(require("./questions"));
const log_1 = __importDefault(require("./log"));
const scrapper = require('./scrapper');
const fsFunctions = require('./fsFunctions');
(async () => {
    const response = await prompts(questions_1.default);
    (0, log_1.default)(response);
    if (response.value === 'screenshot') {
        scrapper.screenshot(response.url, response.fileName);
    }
    if (response.value === 'wikiSummary') {
        const htmlWikiPageSummary = await scrapper.extractHtmlWikiPageSummary(response.url);
        fsFunctions.writeTextToFile(response.fileName, htmlWikiPageSummary);
    }
})();
