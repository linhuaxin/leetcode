class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  swap(i1, i2) {
    let temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  shiftUp(index) {
    if (index === 0) { return; }
    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[index].val) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);
    if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[index].val) {
      this.swap(index, leftIndex);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[index].val) {
      this.swap(index, rightIndex);
      this.shiftDown(rightIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  pop() {
    if (this.size() === 1) { return this.heap.shift(); }
    const n = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return n;
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const h = new MinHeap();
  const res = new ListNode(0);
  let p = res;

  lists.forEach(l => {
    if (l) { h.insert(l); }
  });

  while(h.size() > 0) {
    const n = h.pop();
    p.next = n;
    p = p.next;
    if (n.next) { h.insert(n.next); }
  }

  return res.next;
};
