function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const newHead = new ListNode(0, head)
  let quick: ListNode | null = newHead
  let slow: ListNode | null = newHead
  for (let i = 0; i < n; i++) {
    quick = quick!.next
  }
  while (quick?.next) {
    slow = slow!.next
    quick = quick.next
  }
  slow!.next = slow!.next!.next
  return newHead.next
}

export {}
