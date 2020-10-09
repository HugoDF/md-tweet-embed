const {test} = require('uvu');
const assert = require('uvu/assert');
const {mdTweetEmbed} = require('../md-tweet-embed');
const tweets = require('./fixtures');

test('module - 1 tweet', async () => {
  const [tweetMd] = await mdTweetEmbed([tweets[0].url]);

  assert.snapshot(tweetMd, tweets[0].markdown);
});

test('module - many tweets', async () => {
  const [tweetMd1, tweetMd2] = await mdTweetEmbed([
    tweets[0].url,
    tweets[1].url
  ]);

  assert.snapshot(tweetMd1, tweets[0].markdown);
  assert.snapshot(tweetMd2, tweets[1].markdown);
});

test.run();
