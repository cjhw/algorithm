function sortedArrayToBST(nums: number[]): TreeNode | null {
  function rescur(
    left: number,
    right: number,
    nums: number[]
  ): TreeNode | null {
    if (left > right) return null
    let mid = Math.floor((left + right) / 2)
    const root = new TreeNode(nums[mid])
    root.left = rescur(left, mid - 1, nums)
    root.right = rescur(mid + 1, right, nums)
    return root
  }
  return rescur(0, nums.length - 1, nums)
}
