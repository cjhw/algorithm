class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode: ListNode = new ListNode(0, head)
  let cur: ListNode = dummyNode
  while (cur.next !== null && cur.next.next !== null) {
    let tem = cur.next
    let tem1 = cur.next.next.next
    cur.next = cur.next.next
    cur.next.next = tem
    cur.next.next.next = tem1

    cur = cur.next.next
  }
  return dummyNode.next
}

export {}
