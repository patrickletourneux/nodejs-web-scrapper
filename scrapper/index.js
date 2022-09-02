const puppeteer = require('puppeteer');

const selector = '.sidebar-toc';

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
    const summaryElementHandle = await page.$(selector)
    console.log('summaryElementHandle ',summaryElementHandle);
    
    const summaryText = await (await summaryElementHandle.getProperty('textContent')).jsonValue()
    console.log('summaryText ',summaryText);

    await browser.close();
  },
}

// screenshoot(
//     'https://www.ferrari.com/fr-FR',
//     'ferrari'
// )


