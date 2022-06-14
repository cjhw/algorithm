## 数据结构

1. 链表

   ```js
   while(head) {
       head = head.next
   }
   return head
   // 定义哨兵节点
   let dummy = {
       next:head
   }
   ...
   return dummy.next
   ```

   

2. 数组

   O(1)的空间复杂度  双指针

3. 树   ！！！！！前端最需要刷的数据结构

   ```js
   (二叉树)
   function walk(treeNode) {
       if(treeNode===null) {
           return
       }
       处理 treeNode // 进入节点
       walk(treeNode.left)
       walk(treeNode.right)
       
       walk(treeNode.left)
       处理 treeNode // 进入节点
       walk(treeNode.right)
       
       walk(treeNode.left)
       walk(treeNode.right)
       处理 treeNode // 进入节点
   }
   function walk(treeNode,res=[]) {
      if(treeNode===null) {
         return treeNode
      }
      const stack = []
      let cur = null
      while(stack.length) {
         cur = stack.pop()
         res.push(cur,val)
         cur.right&&stack.push(cur.right)
         cur.left&&stack.push(cur.left)
      }
      return res
   }
   ```

   

## 算法思想

1. 二分（搜索）

   有序的数组里 找一个数字 如果复杂度高 可以先排序再二分

   ```js
   	  let left = 0
         let right = arr.length - 1
         while (left < right) {
           let mid = (right - left) >> 1
           if (arr[mid] < nums[i]) {
             left = mid + 1
           } else {
             right = mid
           }
   ```

   

2. 双指针 （快慢指针，头尾指针）

   ​		1.链表，数组

   一般要求在原地操作时使用双指针

   ```js
   let fast = head
   let slow = head
   while(fast && fast.next) {
       // 怎么走 看需求
   }
   let i
   let j
   ```

   

3. 递归和回溯    （画递归树）  ！！！！！！重点    树的题目

   ```js
   function backTrack(数据，路径缓存) {
       循环：（每次取下一个值）
       	标记
           backTrack(数据，路径缓存)
       	取消标记
   }
   ```

   

4. 动态规划    ！！！！！重点

   想清楚结果怎么推导出来的

   例如

   1，2，5三种零钱，怎么最好的找出11块钱

   dp[11]   11块钱这个只找零最优解

   Min(dp[10],dp[9],dp[6])这三个的最优解 +1

   // 边界条件

   // 循环：

   ​         递推公式

   // 循环硬币

   // dp[n]  n的钱下，返回零钱的最优解

   1.暴力解

   2.研究优化，加备忘录

   3.递推（也就是动态规划）

5. 贪心

   没有公式

6. bfs（宽度优先）  dfs（回溯，深度优先）

## 题型

1. 盛水
2. 炒股
3. 打劫