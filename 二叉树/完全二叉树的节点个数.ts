// function countNodes(root: TreeNode | null): number {
//   const helpQueue: TreeNode[] = []
//   let result: number = 0
//   let tempNode: TreeNode | null
//   if (root) helpQueue.push(root)
//   while (helpQueue.length > 0) {
//     for (let i = 0, length = helpQueue.length; i < length; i++) {
//       tempNode = helpQueue.shift()!
//       result++
//       if (tempNode.left !== null) helpQueue.push(tempNode.left)
//       if (tempNode.right !== null) helpQueue.push(tempNode.right)
//     }
//   }
//   return result
// }

function countNodes(root: TreeNode | null): number {
  function travese(node: TreeNode | null): number {
    if (node === null) {
      return 0
    }
    let leftNum = travese(node.left)
    let rightNum = travese(node.right)
    return leftNum + rightNum + 1
  }
  return travese(root)
}
