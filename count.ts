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

let arr: string[] = []

const isDir = (dir: string) => {
  let stats = fs.statSync('./' + dir)
  let flag = stats.isDirectory()
  if (flag) {
    let dirs = readDir(__dirname + '\\' + dir)
    dirs.forEach((item) => {
      let newDir = dir + '/' + item
      isDir(newDir)
    })
  } else {
    arr.push(dir)
  }
}

const readDir = (dir: string) => {
  // console.log(dir)
  let dirs = fs.readdirSync(dir)
  return dirs
}

filterDirs.forEach((dir) => {
  isDir(dir)
})

let endArr = arr.filter((f) => /\.js$|\.ts$/.test(f))

console.log(/\.js|\.ts$/.test('tips.ts'))

let helpSet = new Set(endArr)
// console.dir(helpSet)

console.log('一共干了' + helpSet.size + '道题,噶油~~~~~~!')
