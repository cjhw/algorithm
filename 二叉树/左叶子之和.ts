function sumOfLeftLeaves(root: TreeNode | null): number {
  if (root === null) return 0
  let midVal: number = 0
  if (root?.left && root?.left.left === null && root.left.right === null) {
    midVal += root.left.val
  }
  let leftVal = sumOfLeftLeaves(root!.left)
  let rightVal = sumOfLeftLeaves(root!.right)
  return midVal + leftVal + rightVal
}
