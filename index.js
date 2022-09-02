const prompts = require('prompts');

const questions = require('./questions');
const log = require('./log');
const scrapper  = require('./scrapper');


(async () => {
  const response = await prompts(questions);
  log(response);

  scrapper.screenshot(
    response.url,
    response.screenshotFileName,
  );
  
  scrapper.extractHtmlWikiPageSummary(
    response.url,
  )

})();