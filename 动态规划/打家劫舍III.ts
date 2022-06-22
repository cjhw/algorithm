function rob(root: TreeNode | null): number {
  const res: number[] = dfs(root)
  return Math.max(...res)
  function dfs(node: TreeNode | null): number[] {
    if (node === null) {
      return [0, 0]
    }
    const left = dfs(node.left)
    const right = dfs(node.right)
    const doSelf: number = node.val + left[0] + right[0]
    const doNotselt = Math.max(...left) + Math.max(...right)
    return [doNotselt, doSelf]
  }
}
