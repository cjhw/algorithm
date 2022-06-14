class ListNode {
  public val: number
  public next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

class MyLinkedList {
  private size: number
  private head: ListNode | null
  private tail: ListNode | null
  constructor() {
    this.size = 0
    this.head = null
    this.tail = null
  }

  // 获取链表中第 index个节点的值
  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1
    }
    let curNoded = this.getNode(index)
    return curNoded.val
  }
  // 在链表的第一个元素之前添加一个值为 val的节点。插入后，新节点将成为链表的第一个节点。
  addAtHead(val: number): void {
    let node: ListNode = new ListNode(val, this.head)
    this.head = node
    if (!this.tail) {
      this.tail = node
    }
    this.size++
  }
  // 将值为 val 的节点追加到链表的最后一个元素。
  addAtTail(val: number): void {
    let node = new ListNode(val, null)
    if (this.tail) {
      this.tail.next = node
    } else {
      this.head = node
    }
    this.tail = node
    this.size++
  }
  // 在链表中的第 index个节点之前添加值为 val的节点。
  // 如果 index等于链表的长度，则该节点将附加到链表的末尾。如果 index大于链表长度，则不会插入节点。如果 index小于0，则在头部插入节点。
  addAtIndex(index: number, val: number): void {
    if (index === this.size) {
      this.addAtTail(val)
      return
    }
    if (index > this.size) {
      return
    }
    if (index <= 0) {
      this.addAtHead(val)
      return
    }
    let curNode = this.getNode(index - 1)
    let node = new ListNode(val, curNode.next)
    curNode.next = node
    this.size++
  }
  // 如果索引 index有效，则删除链表中的第 index个节点。
  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return
    }
    if (index === 0) {
      this.head = this.head!.next
      this.size--
      return
    }
    let curNode = this.getNode(index - 1)
    curNode.next = curNode.next!.next
    if (index === this.size - 1) {
      this.tail = curNode
    }
    this.size--
  }

  private getNode(index: number): ListNode {
    let cur: ListNode = new ListNode(0, this.head)
    for (let i = 0; i <= index; i++) {
      cur = cur.next!
    }
    return cur
  }
}

export {}
