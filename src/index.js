const fs = require('./fs')

const kloc = async (target_path, { exclude = '', show_logs = false } = {}) => {

  let lines_count = 0
  const to_exclude = exclude.length > 0
    ? exclude.split(',')
    : []

  const files = fs.get_files_rec(fs.path_resolve(target_path), to_exclude)

  show_logs
    ? console.log(`\nGot ${files.length} files!\n`)
    : ''

  for (let file of files) {
    const res = fs.read_file(file, 'utf-8')
    const split_by_lines = res.split('\n')

    show_logs
      ? console.log(`- ${file} - [${split_by_lines.length}] lines.`)
      : ''

    lines_count += split_by_lines.length
  }

  return lines_count / 1000
}

module.exports = kloc
