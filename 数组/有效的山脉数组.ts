function validMountainArray(arr: number[]): boolean {
  let left = 0
  let length = arr.length
  let right = length - 1
  while (left < length - 1 && arr[left] < arr[left + 1]) {
    left++
  }
  while (right > 0 && arr[right] < arr[right - 1]) {
    right--
  }
  if (left === right && left !== 0 && right !== length - 1) {
    return true
  }
  return false
}
