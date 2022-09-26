const prompts = require('prompts');

import questions  from './questions';
import logResponses from './log';
import type { Response } from './log';

const scrapper = require('./scrapper');
const fsFunctions = require('./fsFunctions');

(async () => {
  const response : Response= await prompts(questions);
  logResponses(response);

  if (response.value === 'screenshot') {
    scrapper.screenshot(
      response.url,
      response.fileName,
    );
  }

  if (response.value === 'wikiSummary') {
    const htmlWikiPageSummary : string = await scrapper.extractHtmlWikiPageSummary(
      response.url,
    );
    fsFunctions.writeTextToFile(
      response.fileName,
      htmlWikiPageSummary,
    );
  }
})();
