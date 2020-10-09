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
const { mdTweetEmbed } = require('md-tweet-embed');
mdTweetEmbed(['https://twitter.com/hugo__df/status/xxxxx'])
.then(([markdownEmbed]) => {
  console.log(markdownEmbed);
});
```

As a CLI:

```sh
npx md-tweet-embed https://twitter.com/hugo__df/status/xxxxx
```

## Requirements

- Node 10
- Yarn 1.x or npm

## Setup

1. Clone the repository
2. Run `yarn` or `npm install` installs all required dependencies.

## npm scripts

> Equivalent `npm run <script>` should also work

- `yarn lint` will lint all of the files with [xo](https://github.com/xojs/xo)
- `yarn format` will run lint with `--fix` option on all the examples files (and tests).

## LICENSE

Code is licensed under the [MIT License](./LICENSE).

