class BrowserHistory {
  private stack: string[]
  private cur: number
  constructor(homepage: string) {
    this.stack = [homepage]
    this.cur = 0
  }

  visit(url: string): void {
    this.stack.length = this.cur + 1
    this.stack.push(url)
    this.cur++
  }

  back(steps: number): string {
    this.cur = Math.max(0, this.cur - steps)
    return this.stack[this.cur]
    // 越界直接到第一个
  }

  forward(steps: number): string {
    this.cur = Math.min(this.stack.length - 1, this.cur + steps)
    return this.stack[this.cur]
    // 越界直接到最后一个
  }
}
