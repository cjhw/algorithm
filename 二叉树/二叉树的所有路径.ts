// function binaryTreePaths(root: TreeNode | null): string[] {
//   function rescur(node: TreeNode, route: string, resArr: string[]) {
//     route += String(node.val)
//     if (node.left === null && node.right === null) {
//       resArr.push(route)
//       return
//     }
//     if (node.left !== null) {
//       rescur(node.left, route + '->', resArr)
//     }
//     if (node.right !== null) {
//       rescur(node.right, route + '->', resArr)
//     }
//   }
//   const resArr: string[] = []
//   if (root) {
//     rescur(root, '', resArr)
//   }
//   return resArr
// }

function binaryTreePaths(root: TreeNode | null): string[] {
  let res: string[] = []
  function travese(node: TreeNode | null, path: number[]) {
    if (node === null) {
      return null
    }
    if (node.left === null && node.right === null) {
      path.push(node.val)
      res.push(path.join('->'))
    }
    travese(node.left, path.concat(node.val))
    travese(node.right, path.concat(node.val))
  }
  travese(root, [])
  return res
}
