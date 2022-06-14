class TreeNode {
  public val: number
  public left: TreeNode | null
  public right: TreeNode | null
  constructor(val?: number, left?: TreeNode, right?: TreeNode) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

// function invertTree(root: TreeNode | null): TreeNode | null {
//   if (root === null) return null
//   let tempNode: TreeNode | null = root.left
//   root.left = root.right
//   root.right = tempNode
//   invertTree(root.left)
//   invertTree(root.right)
//   return root
// }

function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root
  }
  ;[root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
  return root
}

export {}
