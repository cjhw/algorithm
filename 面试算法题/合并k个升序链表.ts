// 想不出来先暴力解虽然分不高但能过，暴力解也不会那直接gg
// function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
//   const arr: ListNode[] = []
//   for (let i = 0; i < lists.length; i++) {
//     let node = lists[i]
//     while (node) {
//       arr.push(node)
//       node = node.next
//     }
//   }
//   arr.sort((a: ListNode, b: ListNode) => a.val - b.val)
//   let head: ListNode | null = arr[0] || null
//   let cur: ListNode | null = arr[0] || null
//   for (let i = 1; i < arr.length; i++) {
//     cur.next = arr[i]
//     cur = cur.next
//   }
//   return head
// }

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null
  }

  return mergeLists(lists, 0, lists.length - 1)

  // 归并排序的思路 二分的思路
  function mergeLists(
    lists: Array<ListNode | null>,
    start: number,
    end: number
  ) {
    if (start === end) {
      return lists[start]
    }
    const mid = start + ((end - start) >> 1)
    const leftList: ListNode = mergeLists(lists, start, mid)!
    const rightList: ListNode = mergeLists(lists, mid + 1, end)!
    return merge(leftList, rightList)
  }

  function merge(head1: ListNode, head2: ListNode) {
    let flag = new ListNode(0)
    let p = flag
    while (head1 && head2) {
      if (head1.val <= head2.val) {
        p.next = head1
        head1 = head1.next!
      } else {
        p.next = head2
        head2 = head2.next!
      }
      p = p.next
    }
    p.next = head1 ? head1 : head2
    return flag.next
  }
}
