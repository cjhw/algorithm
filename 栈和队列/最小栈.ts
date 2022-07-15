class MinStack {
  private stack: number[]
  private mins: number[]
  constructor() {
    this.stack = []
    this.mins = [Infinity]
  }

  last(arr: number[]): number {
    return arr[arr.length - 1]
  }

  push(val: number): void {
    this.stack.push(val)
    let item = Math.min(this.last(this.mins), val)
    this.mins.push(item)
  }

  pop(): void {
    this.stack.pop()
    this.mins.pop()
  }

  top(): number {
    return this.last(this.stack)
  }

  getMin(): number {
    return this.last(this.mins)
  }
}

let minStack = new MinStack()
minStack.push(1)
console.log(minStack.getMin())
