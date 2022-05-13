// @ts-check
import Turndown from 'turndown';

const turndown = new Turndown();

/**
 * @param {string} tweetUrl
 * @return {string}
 */
const getEmbedUrl = (tweetUrl) =>
  `https://publish.twitter.com/oembed?url=${tweetUrl}&hide_thread=false`;

/**
 *
 * @param {Array<string>} urls
 * @return {Promise<Array<string>>}
 */
export function mdTweetEmbed(urls) {
  return Promise.all(
    urls.map(async (url) => {
      if (
        !(
          url.startsWith('https://twitter.com/') ||
          url.startsWith('http://twitter.com/')
        )
      ) {
        console.warn(`url "${url}" is not from twitter`);
        return;
      }

      // @ts-ignore
      const embedResponse = await fetch(getEmbedUrl(url)).then((r) => r.json());
      return turndown.turndown(embedResponse.html);
    })
  );
}

export default {
  mdTweetEmbed,
};
