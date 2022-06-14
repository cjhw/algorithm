function findMode(root: TreeNode | null): number[] {
  if (root === null) return []
  const countMap: Map<number, number> = new Map()
  function traverse(root: TreeNode | null): void {
    if (root === null) return
    countMap.set(root.val, (countMap.get(root.val) || 0) + 1)
    traverse(root.left)
    traverse(root.right)
  }
  traverse(root)
  const countArr: number[][] = Array.from(countMap)
  countArr.sort((a, b) => {
    return b[1] - a[1]
  })
  const maxCount: number = countArr[0][1]
  const resArr: number[] = []
  for (let i of countArr) {
    if (i[1] === maxCount) {
      resArr.push(i[0])
    }
  }
  return resArr
}
