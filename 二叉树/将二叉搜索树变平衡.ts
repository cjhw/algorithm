function balanceBST(root: TreeNode | null): TreeNode | null {
  const inorderArr: number[] = []
  inorderTraverse(root, inorderArr)
  return buildTree(inorderArr, 0, inorderArr.length - 1)
}

function inorderTraverse(node: TreeNode | null, arr: number[]) {
  if (node === null) return
  inorderTraverse(node.left, arr)
  arr.push(node.val)
  inorderTraverse(node.right, arr)
}

function buildTree(
  arr: number[],
  left: number,
  right: number
): TreeNode | null {
  if (left > right) return null
  const mid = (left + right) >> 1
  const resNode: TreeNode = new TreeNode(arr[mid])
  resNode.left = buildTree(arr, left, mid - 1)
  resNode.right = buildTree(arr, mid + 1, right)
  return resNode
}
