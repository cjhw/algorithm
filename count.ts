import * as fs from 'fs'
import * as path from 'path'
const dir = path.resolve(__dirname, './')

let dirs = fs.readdirSync(dir)

let filterDirs: string[] = dirs.filter((dir) => {
  if (dir === 'node_modules') {
    return false
  }
  if (dir === '.vscode') {
    return false
  }
  if (dir === '.git') {
    return false
  }
  return true
})

let end: string[] = []

filterDirs.forEach((dir) => {
  let stats = fs.statSync('./' + dir)
  let flag = stats.isDirectory()
  if (flag) {
    end.push(dir)
  }
})

let length = 0
end.forEach((dir) => {
  let files = fs.readdirSync(dir)
  length += files.filter((f) => /\.js|\.ts$/.test(f)).length
})

console.log('一共干了' + length + '道题,噶油~~~~~~!')
