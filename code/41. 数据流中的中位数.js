// 默认最大堆
const defaultCmp = (x, y) => x > y;
// 交换元素
const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);
// 堆类，默认最大堆
class Heap {
  constructor(cmp = defaultCmp) {
    this.container = [];
    this.cmp = cmp;
  }
  // 插入
  insert(data) {
    const { container, cmp } = this;
    container.push(data);
    let index = this.size() - 1;
    while (index) {
      let parent = (index - 1) >> 1;
      if (!cmp(container[index], container[parent])) {
        return;
      }
      swap(container, index, parent);
      index = parent;
    }
  }
  // 弹出堆顶，并返回
  pop() {
    const { container, cmp } = this;
    if (!this.size()) {
      return null;
    }

    swap(container, 0, this.size() - 1);
    const res = container.pop();
    const length = this.size();
    let index = 0,
      exchange = index * 2 + 1;

    while (exchange < length) {
      // // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
      let right = index * 2 + 2;
      if (right < length && cmp(container[right], container[exchange])) {
        exchange = right;
      }
      if (!cmp(container[exchange], container[index])) {
        break;
      }
      swap(container, exchange, index);
      index = exchange;
      exchange = index * 2 + 1;
    }

    return res;
  }
  // 获取堆大小
  size() {
    return this.container.length;
  }
  // 获取堆顶
  peek() {
    if (this.size()) return this.container[0];
    return null;
  }
}

class MedianFinder {
  constructor() {
    // 最小堆
    this.min = new Heap((x, y) => x < y);
    // 最大堆
    this.max = new Heap();
  }
  addNum(num) {
    if (this.max.size() !== this.min.size()) {
      // 当N为奇数，需要向min添加一个元素
      // 先将num插入max，再将max堆顶弹出，插入min
      this.max.insert(num);
      this.min.insert(this.max.pop());
    } else {
      // 当N为偶数，需要向max添加一个元素
      // 先将num插入min，再将min堆顶弹出，插入max
      this.min.insert(num);
      this.max.insert(this.min.pop());
    }
  }
  findMedian() {
    return this.max.container.length === this.min.container.length
      ? (this.max.peek() + this.min.peek()) / 2
      : this.max.peek();
  }
}