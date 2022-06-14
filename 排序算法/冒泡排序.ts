function bubbleSort(arr: number[]): number[] {
  let len = arr.length - 1
  for (let j = 0; j < len; j++) {
    for (let i = 0; i < len - j; i++) {
      if (arr[i] > arr[i + 1]) {
        ;[arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
      }
    }
  }
  return arr
}

const arr = [1, 546, 784, 3, 6, 0, 3, 56452, 213, 4, 455]
console.log(bubbleSort(arr))

export {}
