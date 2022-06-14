// function detectCycle(head: ListNode | null): ListNode | null {
//   let slowNode: ListNode | null = head
//   let fastNode: ListNode | null = head
//   while (fastNode !== null && fastNode.next !== null) {
//     slowNode = slowNode!.next
//     fastNode = fastNode.next.next
//     if (slowNode === fastNode) {
//       slowNode = head
//       while (slowNode !== fastNode) {
//         fastNode = fastNode!.next
//         slowNode = slowNode!.next
//       }
//       return slowNode
//     }
//   }
//   return null
// }

function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head
  let slow = head
  while (fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
    if (slow === fast) {
      slow = head
      while (slow !== fast) {
        fast = fast!.next
        slow = slow!.next
      }
      return slow
    }
  }
  return null
}
export {}
