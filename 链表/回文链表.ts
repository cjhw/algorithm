function isPalindrome(head: ListNode | null): boolean {
  let slow = head
  let fast = head
  let prev: ListNode | null = null
  while (fast && fast.next) {
    fast = fast.next.next

    // 翻转链表中间之前的链表
    let next = slow!.next
    slow!.next = prev
    prev = slow
    slow = next
  }
  if (fast) {
    // 奇数个节点时
    slow = slow!.next
  }
  while (prev && slow) {
    if (prev.val !== slow.val) {
      return false
    }
    prev = prev.next
    slow = slow.next
  }
  return true
}
