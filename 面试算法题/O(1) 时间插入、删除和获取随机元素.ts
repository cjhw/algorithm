class RandomizedSet {
  private list: number[]
  private map: { [key: number]: number }
  constructor() {
    this.list = []
    this.map = {}
  }

  insert(val: number): boolean {
    if (val in this.map) {
      return false
    }
    this.list.push(val)
    this.map[val] = this.list.length - 1 //数字对应的索引
    return true
  }

  remove(val: number): boolean {
    if (val in this.map) {
      const index = this.map[val]
      let last = this.list[this.list.length - 1]
      this.list[index] = last
      this.map[last] = index
      delete this.map[val]
      this.list.pop()
      return true
    } else {
      return false
    }
  }

  getRandom(): number {
    const i = Math.floor(Math.random() * this.list.length)
    return this.list[i]
  }
}
