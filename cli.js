#!/usr/bin/env node
import process from 'node:process';
import {mdTweetEmbed} from './md-tweet-embed.js';
/**
 *
 * @param {Array<string>} urls
 * @returns {Promise<void>}
 */
async function main(urls) {
  const tweetEmbeds = await mdTweetEmbed(urls);
  console.log(tweetEmbeds.join('\n-----\n'));
}

main(process.argv.slice(2));
