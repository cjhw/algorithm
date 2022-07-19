class RecentCounter {
  public arr: number[]
  constructor() {
    this.arr = []
  }

  ping(t: number): number {
    this.arr.push(t)
    while (this.arr[0] < t - 3000) {
      this.arr.shift()
    }
    return this.arr.length
  }
}
