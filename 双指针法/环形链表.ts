class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let slowNode: ListNode | null = head
  let fastNode: ListNode | null = head
  while (fastNode && fastNode.next?.next) {
    slowNode = slowNode!.next
    fastNode = fastNode.next.next
    if (slowNode === fastNode) {
      slowNode = head
      while (slowNode !== fastNode) {
        slowNode = slowNode!.next
        fastNode = fastNode!.next
      }
      return slowNode
    }
  }
  return null
}

export {}
