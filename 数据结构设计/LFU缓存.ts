class LFUCache {
  public size: number
  public values: Map<number, number> //key value
  public times: Map<number, number> //key 次数
  public useMap: Map<number, Set<number>>
  public min: number

  constructor(capacity: number) {
    this.size = capacity
    this.values = new Map()
    this.times = new Map()
    // 找到当前次数最小的key
    this.useMap = new Map() // 次数 key:set(key)
    this.min = 0 //最小次数
  }

  updateCount(key: number) {
    let time = this.times.get(key)!
    let useSet = this.useMap.get(time)
    if (this.min === time && useSet?.size === 1) {
      // 当前次数是最小值 并且这个次数只有一个key
      this.min += 1
    }
    time += 1
    useSet?.delete(key)
    useSet = this.useMap.get(time) || new Set()
    useSet.add(key)
    this.useMap.set(time, useSet)
    this.times.set(key, time)
  }

  get(key: number): number {
    if (this.values.has(key)) {
      this.updateCount(key)
      return this.values.get(key)!
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.size === 0) {
      return
    }
    if (this.values.has(key)) {
      // 值存在，不需要淘汰
      this.values.set(key, value)
      this.updateCount(key)
    } else {
      // 值不存在，需要看size
      if (this.size === this.values.size) {
        // 满了需要淘汰
        let minSet = this.useMap.get(this.min)
        let minKey = minSet?.keys().next().value
        minSet?.delete(minKey)
        this.values.delete(minKey)
        this.times.delete(minKey)
      }
      //更新
      this.values.set(key, value)
      //这个数据更新了一次
      let useSet = this.useMap.get(1) || new Set()
      useSet.add(key)
      this.useMap.set(1, useSet)
      this.times.set(key, 1)
      this.min = 1
    }
  }
}
