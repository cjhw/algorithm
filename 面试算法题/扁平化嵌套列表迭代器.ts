interface NestedInteger {
  isInteger(): boolean
  getInteger(): number | null
  setInteger(value: number): void
  add(elem: NestedInteger): void
  getList(): NestedInteger[]
}

class NestedIterator {
  private list: any
  constructor(nestedList: NestedInteger[]) {
    this.list = []
    this.flatArray(nestedList)
  }
  flatArray(arr: NestedInteger[]) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].isInteger()) {
        this.list.push(arr[i].getInteger())
      } else {
        this.flatArray(arr[i].getList())
      }
    }
  }

  hasNext(): boolean {
    return this.list.length > 0
  }

  next(): number {
    return this.list.shift()
  }
}

function flatArray(arr: any[]) {
  const stack = [...arr]
  const res = []
  while (stack.length) {
    let next = stack.pop()
    if (Array.isArray(next)) {
      stack.push(...next)
    } else {
      res.push(next)
    }
  }
  return res
}

console.log(flatArray([[1, 2], 3, 45, 6, [[8, 9], 6]]))
