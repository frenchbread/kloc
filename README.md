KLOC
==

> Get [kloc](https://www.webopedia.com/definitions/kloc/) for a software program.

## install

```bash
# globally

❯ yarn global add kloc

# or in project

❯ yarn add kloc
```

## usage

### `cli`

```bash
❯ kloc ~/code/my-app

KLOC: 41.912

❯ kloc --exclude node_modules,.git

KLOC: 0.632
```

### `nodejs`

```js
const get_kloc = require('kloc')

get_kloc('.', { exclude: 'node_modules,.git', show_logs: true })
    .then(kloc => console.log(`\nKLOC: ${kloc}`))
    .catch(err => console.error(err.message))

// output:
//
// Got 9 files!
//
// - src/fs.js - [31] lines.
// - src/index.js - [31] lines.
// - LICENSE - [22] lines.
// - README.md - [63] lines.
// - cli.js - [40] lines.
// - index.js - [2] lines.
// - package.json - [16] lines.
// - test.js - [6] lines.
// - yarn.lock - [441] lines.
//
// KLOC: 0.652

```

## api

### kloc(path, options?)

Returns a `number`.

#### options

type: `object`

- **exclude**

  type: `string`

  List of files & dirs to be excluded, separated by `,` (no spaces). Deep folder/file reference works too (e.g. `app/node_modules`).

- **show_logs**

  type: `boolean`
  |
  default: `false`

  If `true`, lists each file that affected the total count.

## license

[MIT](https://github.com/frenchbread/kloc/blob/main/LICENSE)
