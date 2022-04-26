import {test} from 'node:test';
import {strictEqual} from 'node:assert';
import {mdTweetEmbed} from '../md-tweet-embed.js';
import tweets from './fixtures.js';

test('module - 1 tweet', async () => {
  const [tweetMd] = await mdTweetEmbed([tweets[0].url]);

  strictEqual(tweetMd, tweets[0].markdown);
});

test('module - many tweets', async () => {
  const [tweetMd1, tweetMd2] = await mdTweetEmbed([
    tweets[0].url,
    tweets[1].url,
  ]);

  strictEqual(tweetMd1, tweets[0].markdown);
  strictEqual(tweetMd2, tweets[1].markdown);
});
