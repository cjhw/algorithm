function isValidBST(root: TreeNode | null): boolean {
  const traverseArr: number[] = []
  function inorder(root: TreeNode | null): void {
    if (root === null) return
    inorder(root.left)
    traverseArr.push(root.val)
    inorder(root.right)
  }
  inorder(root)
  for (let i = 0, length = traverseArr.length; i < length - 1; i++) {
    if (traverseArr[i] >= traverseArr[i + 1]) return false
  }
  return true
}
