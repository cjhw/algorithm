function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (root === null) return null
  if (root.val === key) {
    if (root.left === null && root.right === null) return null
    if (root.left === null) return root.right
    if (root.right === null) return root.left
    let curNode: TreeNode | null = root.right
    while (curNode.left !== null) {
      curNode = curNode.left
    }
    curNode.left = root.left
    return root.right
  }
  if (root.val > key) root.left = deleteNode(root.left, key)
  if (root.val < key) root.right = deleteNode(root.right, key)
  return root
}
