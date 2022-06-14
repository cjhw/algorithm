class MyStack {
  private queue: number[] = []
  constructor() {
    this.queue = []
  }

  push(x: number): void {
    this.queue.push(x)
  }

  pop(): number {
    for (let i = 0, length = this.queue.length - 1; i < length; i++) {
      this.queue.push(this.queue.shift()!)
    }
    return this.queue.shift()!
  }

  top(): number {
    let res: number = this.pop()
    this.push(res)
    return res
  }

  empty(): boolean {
    return this.queue.length === 0
  }
}
