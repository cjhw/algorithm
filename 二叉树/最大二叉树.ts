function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (nums.length === 0) return null
  let maxVal: number = nums[0]
  let maxIndex: number = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxVal) {
      maxIndex = i
      maxVal = nums[i]
    }
  }
  const rootNode: TreeNode = new TreeNode(maxVal)
  rootNode.left = constructMaximumBinaryTree(nums.slice(0, maxIndex))
  rootNode.right = constructMaximumBinaryTree(nums.slice(maxIndex + 1))
  return rootNode
}
