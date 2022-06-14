/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   while (head !== null && head.val === val) {
//     head = head.next
//   }
//   if (head === null) {
//     return head
//   }
//   let pre: ListNode | null = head
//   let cur: ListNode | null = head.next
//   while (cur) {
//     if (cur.val === val) {
//       pre.next = cur.next
//     } else {
//       pre = cur
//     }
//     cur = cur.next
//   }
//   return head
// }

// function removeElements(head: ListNode | null, val: number): ListNode | null {
//   if (head === null) return head
//   head.next = removeElements(head.next, val)
//   return head.val === val ? head.next : head
// }

function removeElements(head: ListNode | null, val: number): ListNode | null {
  let ele = {
    next: head,
  }
  let p = ele
  while (p.next) {
    if (p.next.val === val) {
      p.next = p.next.next
    } else {
      p = p.next
    }
  }
  return p.next
}

export {}
