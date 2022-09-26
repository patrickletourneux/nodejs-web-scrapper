// import {prompts}  from 'prompts';
import prompts from 'prompts';

import questions  from './questions';
import logResponses from './log';

import scrapper from './scrapperPuppeteer';
import fsFunctions from './fsFunctions';

(async () => {
  const response = await prompts(questions);
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
