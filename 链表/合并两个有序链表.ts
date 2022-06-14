function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let dummy = new ListNode(0, null)
  let temp = dummy
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      temp.next = list1
      list1 = list1.next
    } else {
      temp.next = list2
      list2 = list2.next
    }
    temp = temp.next
  }
  temp.next = list1 === null ? list2 : list1
  return dummy.next
}
