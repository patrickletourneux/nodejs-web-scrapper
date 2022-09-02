const puppeteer = require('puppeteer');

const screenshoot = async (url , fileNamePng) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({path: `./screenshot/${fileNamePng}.png`});

  await browser.close();
};

// screenshoot(
//     'https://www.ferrari.com/fr-FR',
//     'ferrari'
// )

module.exports = screenshoot;

