"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer = require('puppeteer');
const config_1 = __importDefault(require("../config"));
exports.default = {
    async screenshot(url, fileNamePng) {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const path = `${config_1.default.dirName}/userCreatedFiles/${fileNamePng}.png`;
        await page.screenshot({ path: path });
        console.log('screenshot done');
        await browser.close();
    },
    async extractHtmlWikiPageSummary(url) {
        const selector = '.sidebar-toc';
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        // const htmlContent = await page.content();
        const summaryElementHandle = await page.$(selector);
        const summaryText = await (await summaryElementHandle.getProperty('textContent')).jsonValue();
        await browser.close();
        return summaryText;
    },
};
// screenshoot(
//     'https://www.ferrari.com/fr-FR',
//     'ferrari'
// )
