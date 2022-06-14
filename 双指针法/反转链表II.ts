function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  let dummy: ListNode | null = new ListNode(0, head)
  let temp: ListNode | null = dummy
  for (let i = 0; i < left - 1; i++) {
    temp = temp!.next
  }
  let prev = temp?.next
  let cur = prev?.next
  for (let j = 0; j < right - left; j++) {
    let next = cur!.next
    cur!.next = prev!
    prev = cur
    cur = next
  }
  temp!.next!.next = cur!
  temp!.next = prev!
  return dummy.next
}
