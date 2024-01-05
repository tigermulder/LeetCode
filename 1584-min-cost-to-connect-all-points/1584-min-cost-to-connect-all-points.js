/**
 * @param {number[][]} points
 * @return {number}
 */
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  removePop() {
    if (this.isEmpty()) {
      return null;
    }
    if (this.heap.length === 1) {
      return this.heap.pop();
    }
    const root = this.heap[0];
    const lastElement = this.heap.pop();
    this.heap[0] = lastElement;
    this.heapifyDown();
    return root;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0) {
      const element = this.heap[index];
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];

      if (element[1] >= parent[1]) break;

      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild[1] < this.heap[index][1]) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild[1] < this.heap[index][1]) ||
          (swap !== null && rightChild[1] < leftChild[1])
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;

      const temp = this.heap[index];
      this.heap[index] = this.heap[swap];
      this.heap[swap] = temp;
      index = swap;
    }
  }
}

var minCostConnectPoints = function(points) {
  let priorityqueue = new MinHeap()
  let visitTable = {}
  let startNode = 0
  priorityqueue.insert([startNode,0])
  let result = 0
  while(!priorityqueue.isEmpty()){
    let [node,cost] = priorityqueue.removePop()
    if (visitTable[node]) continue;
    result += cost;
    visitTable[node] = true;
    for (let i = 0; i < points.length; i++) {
      if(!visitTable[i]){
        let cost = Math.abs(points[node][0] - points[i][0]) + Math.abs(points[node][1] - points[i][1])
        priorityqueue.insert([i, cost])
      }
    }
  }
  return result;
};