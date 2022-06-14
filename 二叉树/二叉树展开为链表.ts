function flatten(root: TreeNode | null): void {
  let list: TreeNode[] = []
  preTravese(root, list)
  for (let i = 1; i < list.length; i++) {
    let prev = list[i - 1]
    let cur = list[i]
    prev.left = null
    prev.right = cur
  }
  function preTravese(root: TreeNode | null, list: TreeNode[]): void {
    if (root !== null) {
      list.push(root)
      preTravese(root!.left, list)
      preTravese(root!.right, list)
    }
  }
}
