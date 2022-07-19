class AuthenticationManager {
  private timeToLive: number
  private manager: Map<string, number>
  constructor(timeToLive: number) {
    this.timeToLive = timeToLive
    this.manager = new Map() // 管理所有的token
  }

  generate(tokenId: string, currentTime: number): void {
    this.manager.set(tokenId, currentTime)
  }
  // 更新
  renew(tokenId: string, currentTime: number): void {
    if (this.manager.has(tokenId)) {
      let time = this.manager.get(tokenId)!
      if (time + this.timeToLive > currentTime) {
        this.manager.set(tokenId, currentTime)
      }
    }
  }

  // 返回未过期的验证码数
  countUnexpiredTokens(currentTime: number): number {
    let result: number = 0
    for (let time of this.manager.values()) {
      if (time + this.timeToLive > currentTime) {
        result++
      }
    }
    return result
  }
}
