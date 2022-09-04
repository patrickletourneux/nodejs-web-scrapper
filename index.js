const prompts = require('prompts');

const questions = require('./questions');
const log = require('./log');
const scrapper  = require('./scrapper');
const writeTextToFile = require('./fs');

(async () => {
  const response = await prompts(questions);
  log(response);

  scrapper.screenshot(
    response.url,
    response.screenshotFileName,
  );
  
  htmlWikiPageSummary  = await scrapper.extractHtmlWikiPageSummary(
    response.url,
  )

  writeTextToFile(response.screenshotFileName, htmlWikiPageSummary)
  // console.log(htmlWikiPageSummary);

})();