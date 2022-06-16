function sortedListToBST(head: ListNode | null): TreeNode | null {
  function travese(
    head: ListNode | null,
    tail: ListNode | null
  ): TreeNode | null {
    if (head === tail) {
      return null
    }
    let slow = head
    let fast = head
    while (fast !== tail && fast!.next !== tail) {
      slow = slow!.next
      fast = fast!.next!.next
    }
    let root = new TreeNode(slow!.val)
    root.left = travese(head, slow)
    root.right = travese(slow!.next, tail)
    return root
  }
  return travese(head, null)
}
