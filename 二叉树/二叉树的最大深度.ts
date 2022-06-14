// function maxDepth(root: TreeNode | null): number {
//   const helpUQueue: TreeNode[] = []
//   let tempNode: TreeNode
//   let resDepth: number = 0
//   if (root) {
//     helpUQueue.push(root)
//   }
//   while (helpUQueue.length > 0) {
//     resDepth++
//     for (let i = 0, length = helpUQueue.length; i < length; i++) {
//       tempNode = helpUQueue.shift()!
//       if (tempNode.left) {
//         helpUQueue.push(tempNode.left)
//       }
//       if (tempNode.right) {
//         helpUQueue.push(tempNode.right)
//       }
//     }
//   }
//   return resDepth
// }

// 递归
function maxDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
