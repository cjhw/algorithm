// 简单写法空间复杂度高
function quickSort(arr: number[]): number[] {
  if (arr.length < 2) {
    return arr
  }
  let flag: number = arr[0]
  let left: number[] = []
  let right: number[] = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > flag) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return quickSort(left).concat(flag, quickSort(right))
}

// 原地快排
function quick1(arr: number[], start: number, end: number): number {
  let init = start
  let flag = arr[init]
  start++
  for (let i = init; i <= end; i++) {
    while (arr[start] < flag) {
      start++
    }
    while (arr[end] > flag) {
      end--
    }
    if (start < end) {
      ;[arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }
  ;[arr[init], arr[start - 1]] = [arr[start - 1], arr[init]]
  return start
}
function quickSort1(arr: number[], start: number, end: number): number[] {
  if (start < end) {
    let index = quick1(arr, start, end)
    quickSort1(arr, start, index - 1)
    quickSort1(arr, index, end)
  }
  return arr
}

const arr = [26, 34, 55, 23, 44, 12, 25, 34]
console.log(quickSort1(arr, 0, arr.length - 1))
