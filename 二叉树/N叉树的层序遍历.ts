class Node {
  val: number
  children: Node[]
  constructor(val?: number) {
    this.val = val === undefined ? 0 : val
    this.children = []
  }
}

// 更像前端的场景

function levelOrder(root: Node | null): number[][] {
  let res: number[][] = []
  if (root === null) {
    return res
  }
  let queue = [root]
  while (queue.length) {
    let cur = []
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let node = queue.shift()
      cur.push(node!.val)
      node?.children.forEach((child) => {
        child && queue.push(child)
      })
    }
    res.push(cur)
  }

  return res
}

export {}
