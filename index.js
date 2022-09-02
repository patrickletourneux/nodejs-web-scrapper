const prompts = require('prompts');

const questions = require('./questions');
const log = require('./log');


(async () => {
  const response = await prompts(questions);
  log(response);
})();