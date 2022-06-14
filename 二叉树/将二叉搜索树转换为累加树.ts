function convertBST(root: TreeNode | null): TreeNode | null {
  let pre: number = 0
  function rescur(root: TreeNode | null) {
    if (root === null) return
    rescur(root.right)
    root.val += pre
    pre = root.val
    rescur(root.left)
  }
  rescur(root)
  return root
}
