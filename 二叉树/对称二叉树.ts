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

// function isSymmetric(root: TreeNode | null): boolean {
//   const helpStack: (TreeNode | null)[] = []
//   let tempNode1: TreeNode | null
//   let tempNode2: TreeNode | null
//   if (root !== null) {
//     helpStack.push(root.left)
//     helpStack.push(root.right)
//   }
//   while (helpStack.length > 0) {
//     tempNode1 = helpStack.pop()!
//     tempNode2 = helpStack.pop()!
//     if (tempNode1 === null && tempNode2 === null) continue
//     if (tempNode1 === null || tempNode2 === null) return false
//     if (tempNode1.val !== tempNode2.val) return false
//     helpStack.push(tempNode1.left)
//     helpStack.push(tempNode2.right)
//     helpStack.push(tempNode1.right)
//     helpStack.push(tempNode2.left)
//   }
//   return true
// }

function isSymmetric(root: TreeNode | null): boolean {
  const travese = (root1: TreeNode | null, root2: TreeNode | null): boolean => {
    if (root1 === null && root2 === null) {
      return true
    }
    if (root1 === null || root2 === null) {
      return false
    }
    if (root1.val === root2.val) {
      return (
        travese(root1.left, root2.right) && travese(root1.right, root2.left)
      )
    }
    return false
  }
  return travese(root!.left, root!.right)
}
