const prompts = require('prompts');

import questions  from './questions';
import log from './log';
const scrapper = require('./scrapper');
const fsFunctions = require('./fsFunctions');

(async () => {
  const response = await prompts(questions);
  log(response);

  if (response.value === 'screenshot') {
    scrapper.screenshot(
      response.url,
      response.fileName,
    );
  }

  if (response.value === 'wikiSummary') {
    const htmlWikiPageSummary = await scrapper.extractHtmlWikiPageSummary(
      response.url,
    );
    fsFunctions.writeTextToFile(
      response.fileName,
      htmlWikiPageSummary,
    );
  }
})();
