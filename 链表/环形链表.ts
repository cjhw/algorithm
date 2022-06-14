// es6
// function hasCycle(head: ListNode | null): boolean {
//   const cache = new Set()
//   while (head) {
//     if (cache.has(head)) return true
//     else {
//       cache.add(head)
//     }
//     head = head.next
//   }
//   return false
// }

// 双指针
function hasCycle(head: ListNode | null): boolean {
  let fast: ListNode | null = head
  let slow: ListNode | null = head
  while (fast?.next) {
    fast = fast.next.next
    slow = slow!.next
    if (fast === slow) {
      return true
    }
  }
  return false
}
