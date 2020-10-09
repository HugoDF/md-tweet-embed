#!/usr/bin/env node
const {mdTweetEmbed} = require('./md-tweet-embed');
/**
 *
 * @param {Array<string>} urls
 * @returns {Promise<void>}
 */
async function main(urls) {
  console.log((await mdTweetEmbed(urls)).join('\n-----\n'));
}

main(process.argv.slice(2));
