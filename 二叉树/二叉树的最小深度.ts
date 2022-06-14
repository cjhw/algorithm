// function minDepth(root: TreeNode | null): number {
//   const helpQueue: TreeNode[] = []
//   let tempNode: TreeNode | null
//   let resDepth: number = 0
//   if (root) {
//     helpQueue.push(root)
//   }
//   while (helpQueue.length > 0) {
//     resDepth++
//     for (let i = 0, length = helpQueue.length; i < length; i++) {
//       tempNode = helpQueue.shift()!
//       if (tempNode !== null) {
//         if (tempNode.left === null && tempNode.right === null) {
//           return resDepth
//         } else {
//           helpQueue.push(tempNode.left!)
//           helpQueue.push(tempNode.right!)
//         }
//       }
//     }
//   }
//   return resDepth
// }

// function minDepth(root: TreeNode | null): number {
//   if (root === null) {
//     return 0
//   }
//   if (!root.left && !root.right) {
//     return 1
//   }
//   if (!root.left) {
//     return 1 + minDepth(root.right)
//   }
//   if (!root.right) {
//     return 1 + minDepth(root.left)
//   }
//   return Math.min(minDepth(root.left), minDepth(root.right)) + 1
// }

function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0
  }
  let stack = [root]
  let dep = 0
  while (true) {
    dep++
    let size = stack.length
    while (size--) {
      let node = stack.shift()
      if (!node?.left && !node?.right) {
        return dep
      }
      node.left && stack.push(node.left)
      node.right && stack.push(node.right)
    }
  }
}
