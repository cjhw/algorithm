function sortList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }
  let arr: ListNode[] = []
  while (head) {
    let temp: ListNode | null = head.next
    head.next = null
    arr.push(head)
    head = temp
  }
  arr.sort((a, b) => a.val - b.val)
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i].next = arr[i + 1]
  }
  return arr[0]
}
