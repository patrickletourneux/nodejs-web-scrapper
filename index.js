const prompts = require('prompts');

const questions = require('./questions');
const log = require('./log');
const scrapper  = require('./scrapper');
const fsFunctions = require('./fsFunctions');

(async () => {
  const response = await prompts(questions);
  log(response);
  
  if (response.value === 'screenshot'){
    scrapper.screenshot(
      response.url,
      response.fileName,
    );
  }

  if (response.value === 'wikiSummary'){ 
    htmlWikiPageSummary  = await scrapper.extractHtmlWikiPageSummary(
      response.url,
      )
    fsFunctions.writeTextToFile(
      response.fileName, 
      htmlWikiPageSummary
      )
  }
})();