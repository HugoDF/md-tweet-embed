# md-tweet-embed

Convert Tweets to Markdown embeds.

## Installation

```sh
npm install --save md-tweet-embed
# or
yarn add md-tweet-embed
```

## Usage

From a JavaScript file, run through Node.js

```js
import { mdTweetEmbed } from 'md-tweet-embed';
mdTweetEmbed(['https://twitter.com/hugo__df/status/1314635351928041472'])
.then(([markdownEmbed]) => {
  console.log(markdownEmbed);
  // > md-tweet-embed: an npm module/CLI that takes tweet URLs and turns them to markdown
  // >
  // > CLI: npx md-tweet-embed <your-twitter-urls>
  // >
  // > From JS:
  // >
  // > const {mdTweetEmbed} = require('md-tweet-embed');
  // > mdTweetEmbed(['twitter-url']).then(([embed]) => {}); [pic.twitter.com/2A7hCismd1](https://t.co/2A7hCismd1)
  // >
  // > — Hugo (@hugo\_\_df) [October 9, 2020](https://twitter.com/hugo__df/status/1314635351928041472?ref_src=twsrc%5Etfw)
});
```

As a CLI:

```sh
npx md-tweet-embed https://twitter.com/hugo__df/status/1314635351928041472
> md-tweet-embed: an npm module/CLI that takes tweet URLs and turns them to markdown
>
> CLI: npx md-tweet-embed <your-twitter-urls>
>
> From JS:
>
> const {mdTweetEmbed} = require('md-tweet-embed');
> mdTweetEmbed(['twitter-url']).then(([embed]) => {}); [pic.twitter.com/2A7hCismd1](https://t.co/2A7hCismd1)
>
> — Hugo (@hugo\_\_df) [October 9, 2020](https://twitter.com/hugo__df/status/1314635351928041472?ref_src=twsrc%5Etfw)
```

## Requirements

- Node 18
- npm v8

## Setup

1. Clone the repository
2. Run `npm install` installs all required dependencies.

## npm scripts

> Equivalent `npm run <script>` should also work

- `npm run test` will run all tests (written with uvu).
- `npm run fmt` will run lint with `--fix` option on all the examples files (and tests).

## LICENSE

Code is licensed under the [MIT License](./LICENSE).

