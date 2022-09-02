const puppeteer = require('puppeteer');

const selector = '.sidebar-toc-title';

module.exports = {
  async screenshot (url , fileNamePng) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.screenshot({path: `./screenshot/${fileNamePng}.png`});
    console.log('sreenshot created')
    await browser.close();
  },
  async extractHtmlWikiPageSummary (url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    // const htmlContent = await page.content();
    const summary = await page.$(selector)
    console.log('html summary ',summary);
    await browser.close();
  },
}

// screenshoot(
//     'https://www.ferrari.com/fr-FR',
//     'ferrari'
// )


