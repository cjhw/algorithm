class LRUCache {
  private cache: Map<number, number>
  private max: number
  constructor(capacity: number) {
    this.cache = new Map()
    this.max = capacity
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      let tmp = this.cache.get(key) as number
      this.cache.delete(key)
      this.cache.set(key, tmp)
      return tmp
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    } else if (this.cache.size === this.max) {
      this.cache.delete(this.cache.keys().next().value)
    }
    this.cache.set(key, value)
  }
}
