// function mergeTrees(
//   root1: TreeNode | null,
//   root2: TreeNode | null
// ): TreeNode | null {
//   if (root1 === null) return root2
//   if (root2 === null) return root1
//   const rootNode = new TreeNode(root1.val + root2.val)
//   rootNode.left = mergeTrees(root1.left, root2.left)
//   rootNode.right = mergeTrees(root1.right, root2.right)
//   return rootNode
// }

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null) return root2
  if (root2 === null) return root1
  root1.val += root2.val
  root1.left = mergeTrees(root1.left, root2.left)
  root1.right = mergeTrees(root1.right, root2.right)
  return root1
}
