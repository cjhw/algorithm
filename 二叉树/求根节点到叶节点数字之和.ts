function sumNumbers(root: TreeNode | null): number {
  if (root === null) return 0
  let resTotal: number = 0
  const route: number[] = []
  route.push(root.val)
  recur(root, route)
  return resTotal
  function recur(node: TreeNode, route: number[]) {
    if (node.left === null && node.right === null) {
      resTotal += listToSum(route)
      return
    }
    if (node.left !== null) {
      route.push(node.left.val)
      recur(node.left, route)
      route.pop()
    }
    if (node.right !== null) {
      route.push(node.right.val)
      recur(node.right, route)
      route.pop()
    }
  }
  function listToSum(nums: number[]): number {
    return Number(nums.join(''))
  }
}
