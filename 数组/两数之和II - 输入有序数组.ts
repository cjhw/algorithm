function twoSum(numbers: number[], target: number): number[] {
  let left = 0
  let right = numbers.length - 1
  while (left < right) {
    let res = numbers[left] + numbers[right]
    if (res === target) {
      return [left + 1, right + 1]
    } else if (res < target) {
      left++
    } else {
      right++
    }
  }
  return []
}
