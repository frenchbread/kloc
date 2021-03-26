#!/usr/bin/env node
'use strict'

const meow = require('meow')

const get_kloc = require('./')

const cli = meow(`

  Usage:

    $ kloc <project_path>

  Options

    --exclude     Files & dirs to exclude (supports nested path)
    --show-logs   Include logs in the output

  Usage

    $ kloc ~/code/my-app
    $ kloc ~/code/my-app --exclude .git,node_modules,dist --show-logs

  `)

if (cli.input.length > 0 && cli.input[0] !== '') {
    const project_path = cli.input[0]
    const { exclude, showLogs } = cli.flags

    get_kloc(project_path, { exclude, show_logs: showLogs })
      .then(kloc => console.log(`\nKLOC: ${kloc}.`))
      .catch(err => console.error(err.message))
  } else {
    console.log(cli.help)

    process.exit(1)
  }
