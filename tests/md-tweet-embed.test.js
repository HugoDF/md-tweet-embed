import {test} from 'uvu';
import {snapshot} from 'uvu/assert';
import {mdTweetEmbed} from '../md-tweet-embed.js';
import tweets from './fixtures.js';

test('module - 1 tweet', async () => {
  const [tweetMd] = await mdTweetEmbed([tweets[0].url]);

  snapshot(tweetMd, tweets[0].markdown);
});

test('module - many tweets', async () => {
  const [tweetMd1, tweetMd2] = await mdTweetEmbed([
    tweets[0].url,
    tweets[1].url,
  ]);

  snapshot(tweetMd1, tweets[0].markdown);
  snapshot(tweetMd2, tweets[1].markdown);
});

test.run();
