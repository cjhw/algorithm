function recoverTree(root: TreeNode | null): void {
  let arr: TreeNode[] = []
  let first: TreeNode | null = null
  let second: TreeNode | null = null
  function travese(node: TreeNode | null) {
    if (node === null) {
      return
    }
    travese(node.left)
    arr.push(node)
    travese(node.right)
  }
  travese(root)
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].val > arr[i + 1].val) {
      if (!first) {
        first = arr[i]
      }
      second = arr[i + 1]
    }
  }
  let tmp = first!.val
  first!.val = second!.val
  second!.val = tmp
}
