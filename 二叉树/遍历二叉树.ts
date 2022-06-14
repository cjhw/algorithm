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

// 前序遍历
// function preorderTraversal(root: TreeNode | null): number[] {
//   function traverse(node: TreeNode | null, res: number[]) {
//     if (node === null) return
//     res.push(node.val)
//     traverse(node.left, res)
//     traverse(node.right, res)
//     return res
//   }
//   const res: number[] = []
//   traverse(root, res)
//   return res
// }

function preorderTraversal(root: TreeNode | null): number[] {
  let res: number[] = []
  if (root === null) {
    return res
  }
  let stack: TreeNode[] = [root]
  while (stack.length) {
    let cur = stack.pop()
    res.push(cur!.val)
    cur?.right && stack.push(cur?.right)
    cur?.left && stack.push(cur?.left)
  }
  return res
}

// 中序遍历
function inorderTraversal(root: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]) {
    if (node === null) return
    traverse(node.left, res)
    res.push(node.val)
    traverse(node.right, res)
    return res
  }
  const res: number[] = []
  traverse(root, res)
  return res
}
// 后序遍历

function postorderTraversal(root: TreeNode | null): number[] {
  function traverse(node: TreeNode | null, res: number[]) {
    if (node === null) return
    traverse(node.left, res)
    traverse(node.right, res)
    res.push(node.val)
    return res
  }
  const res: number[] = []
  traverse(root, res)
  return res
}

// 层序遍历
function levelOrder(root: TreeNode | null): number[][] {
  const helpQueue: TreeNode[] = []
  const res: number[][] = []
  let tempArr: number[] = []
  if (root) helpQueue.push(root)
  let curNode: TreeNode | null
  while (helpQueue.length > 0) {
    //这里要注意length要保存下来
    for (let i = 0, length = helpQueue.length; i < length; i++) {
      curNode = helpQueue.shift()!
      tempArr.push(curNode.val)
      if (curNode.left !== null) {
        helpQueue.push(curNode.left)
      }
      if (curNode.right !== null) {
        helpQueue.push(curNode.right)
      }
    }
    res.push(tempArr)
    tempArr = []
  }
  return res
}

export {}
