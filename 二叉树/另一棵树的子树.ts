function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root && !subRoot) {
    return true
  }
  if (root === null || subRoot === null) {
    return false
  }
  if (root.val === subRoot.val) {
    if (isSameTree(root, subRoot)) {
      return true
    }
  }
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }
  if (p.val !== q.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

export {}
