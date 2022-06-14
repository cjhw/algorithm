// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   if (p === null && q === null) {
//     return true
//   }
//   if (p === null || q === null) {
//     return false
//   }
//   if (p.val !== q.val) {
//     return false
//   }
//   return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
// }

// function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
//   function traverse(p: TreeNode | null, q: TreeNode | null): boolean {
//     if (p === null && q === null) {
//       return true
//     }
//     if (p === null || q === null) {
//       return false
//     }
//     let left = traverse(p.left, q.left)
//     let right = traverse(p.right, q.right)
//     if (p.val === q.val && left && right) {
//       return true
//     }
//     return false
//   }
//   return traverse(p, q)
// }

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null && q === null) {
    return true
  }
  if (p === null || q === null) {
    return false
  }
  let queueP = [p]
  let queueQ = [q]
  while (queueP.length && queueQ.length) {
    let nodeP = queueP.pop()
    let nodeQ = queueQ.pop()
    if (nodeP?.val !== nodeQ?.val) {
      return false
    }
    if (nodeP?.left && nodeQ?.left) {
      queueP.push(nodeP.left)
      queueQ.push(nodeQ.left)
    } else if (nodeP?.left || nodeQ?.left) {
      return false
    }
    if (nodeP?.right && nodeQ?.right) {
      queueP.push(nodeP.right)
      queueQ.push(nodeQ.right)
    } else if (nodeP?.right || nodeQ?.right) {
      return false
    }
  }
  return queueP.length === 0 && queueQ.length === 0
}
