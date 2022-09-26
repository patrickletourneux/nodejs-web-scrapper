"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import {prompts}  from 'prompts';
const prompts_1 = __importDefault(require("prompts"));
const questions_1 = __importDefault(require("./questions"));
const log_1 = __importDefault(require("./log"));
const scrapper_1 = __importDefault(require("./scrapper"));
const fsFunctions_1 = __importDefault(require("./fsFunctions"));
(async () => {
    const response = await (0, prompts_1.default)(questions_1.default);
    (0, log_1.default)(response);
    if (response.value === 'screenshot') {
        scrapper_1.default.screenshot(response.url, response.fileName);
    }
    if (response.value === 'wikiSummary') {
        const htmlWikiPageSummary = await scrapper_1.default.extractHtmlWikiPageSummary(response.url);
        fsFunctions_1.default.writeTextToFile(response.fileName, htmlWikiPageSummary);
    }
})();
