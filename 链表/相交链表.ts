function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let curA = headA
  let curB = headB
  while (curA !== curB) {
    curA = curA === null ? headB : curA.next
    curB = curB === null ? headA : curB.next
  }
  return curA
}
