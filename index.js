const prompts = require('prompts');

const questions = require('./questions');
const log = require('./log');
const screenshoot = require('./scrapper');


(async () => {
  const response = await prompts(questions);
  log(response);
  screenshoot(
    response.url,
    response.screenshotFileName,
)

})();