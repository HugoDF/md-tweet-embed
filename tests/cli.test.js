const {test} = require('uvu');
const assert = require('uvu/assert');
const {execSync} = require('child_process');
const tweets = require('./fixtures');

const runCli = (arg) => execSync(`./cli.js ${arg}`).toString().trimEnd();

test('CLI - 1 tweet', () => {
  assert.snapshot(runCli(tweets[0].url), tweets[0].markdown);
});

test('CLI - many tweets', () => {
  assert.snapshot(
    runCli(`${tweets[0].url} ${tweets[1].url}`),
    `${tweets[0].markdown}
-----
${tweets[1].markdown}`
  );
});

test.run();
