import {execSync} from 'node:child_process';
import {test} from 'uvu';
import {snapshot} from 'uvu/assert';
import tweets from './fixtures.js';

const runCli = (arg) => execSync(`./cli.js ${arg}`).toString().trimEnd();

test('CLI - 1 tweet', () => {
  snapshot(runCli(tweets[0].url), tweets[0].markdown);
});

test('CLI - many tweets', () => {
  snapshot(
    runCli(`${tweets[0].url} ${tweets[1].url}`),
    `${tweets[0].markdown}
-----
${tweets[1].markdown}`,
  );
});

test.run();
