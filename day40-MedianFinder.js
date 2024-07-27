//Read the solution directly XD.
//Two Heap.. who could have possibly thought of this solution?
//In Leetcode.. u need to use 'element'. (Ex:this.minHeap.front().element)
const {
  MaxPriorityQueue,
  MinPriorityQueue,
} = require("@datastructures-js/priority-queue");

var MedianFinder = function () {
  //Each element is smaller than 'median'.
  this.maxHeap = new MaxPriorityQueue();
  //Each element is bigger than 'median'.
  this.minHeap = new MinPriorityQueue();
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  if (num > this.maxHeap.front()) {
    this.minHeap.enqueue(num);
  } else {
    this.maxHeap.enqueue(num);
  }

  //balance
  if (this.minHeap.size() - this.maxHeap.size() == 2) {
    this.maxHeap.enqueue(this.minHeap.dequeue());
  } else if (this.maxHeap.size() - this.minHeap.size() == 2) {
    this.minHeap.enqueue(this.maxHeap.dequeue());
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.minHeap.size() > this.maxHeap.size()) {
    return this.minHeap.front();
  } else if (this.maxHeap.size() > this.minHeap.size()) {
    return this.maxHeap.front();
  } else {
    return (this.minHeap.front() + this.maxHeap.front()) / 2;
  }
};
MedianFinder.prototype.print = function () {
  console.log(this.maxHeap.toArray());
  console.log(this.minHeap.toArray());
  console.log(this.maxHeap.front());
};
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

const obj = new MedianFinder();
// obj.addNum(3);
// obj.addNum(5);
// obj.addNum(1);
// obj.addNum(4);
// obj.addNum(66);
// obj.addNum(100);
// obj.addNum(2);
// obj.addNum(7);
obj.addNum(1);
obj.addNum(2);
obj.addNum(3);

console.log(obj.findMedian());
obj.print();
