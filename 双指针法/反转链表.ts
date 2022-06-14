class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let curNode: ListNode | null = head
  let preNode: ListNode | null = null
  let tempNode: ListNode | null = null
  while (curNode) {
    tempNode = curNode.next
    curNode.next = preNode
    preNode = curNode
    curNode = tempNode
  }
  return preNode
}

export {}
