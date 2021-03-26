const path = require('path')
const fs = require('fs')

module.exports = {
  get_dirs (_path, to_exclude = []) {
    const dirs = fs.readdirSync(_path)
      .filter(name => !to_exclude.some(exclude => path.join(_path, name).includes(exclude)))

    return dirs.map(name => path.join(_path, name)).filter(this.is_dir)
  },
  get_files (_path, to_exclude = []) {
    const files = fs.readdirSync(_path)
      .filter(name => !to_exclude.some(exclude => path.join(_path, name).includes(exclude)))

    return files.map(name => path.join(_path, name)).filter(this.is_file)
  },
  get_files_rec (_path, to_exclude) {
    let dirs = this.get_dirs(_path, to_exclude)

    let files = dirs.map(dir => this.get_files_rec(dir, to_exclude)).reduce((a, b) => a.concat(b), [])

    return files.concat(this.get_files(_path, to_exclude))
  },
  is_file: _path => fs.statSync(_path).isFile(),
  is_dir: _path => fs.statSync(_path).isDirectory(),
  read_file: (_path, encoding) => fs.readFileSync(_path, encoding)
}
