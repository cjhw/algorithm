class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const newNode: ListNode | null = new ListNode(0, head)
  let quick: ListNode | null = newNode
  let slow: ListNode | null = newNode
  let count = 0
  while (count !== n) {
    quick = quick!.next
    count++
  }
  while (quick!.next) {
    quick = quick!.next
    slow = slow!.next
  }
  slow!.next = slow!.next!.next
  return newNode.next
}

export {}
