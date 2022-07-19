class Trie {
  private children: { [x: string]: Object | boolean }
  constructor() {
    this.children = {}
  }

  insert(word: string): void {
    let children = this.children
    for (let ch of word) {
      if (!children[ch]) {
        children[ch] = {}
      }
      children = children[ch] as { [x: string]: Object }
    }
    children.end = true //最后一个节点标记一下结束
  }

  search(word: string): boolean {
    let children = this.children
    for (let ch of word) {
      if (!children[ch]) return false
      children = children[ch] as { [x: string]: Object }
    }
    return children && children.end != undefined
  }

  startsWith(prefix: string): boolean {
    let children = this.children
    for (let ch of prefix) {
      if (!children[ch]) return false
      children = children[ch] as { [x: string]: Object }
    }
    return true
  }
}

let trie = new Trie()
trie.insert('apple')
console.log(JSON.stringify(trie, null, 2))

// trie.search("apple");   // 返回 True
// trie.search("app");     // 返回 False
// trie.startsWith("app"); // 返回 True
// trie.insert("app");
// trie.search("app");     // 返回 True
