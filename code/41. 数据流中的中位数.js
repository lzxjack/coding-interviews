const MedianFinder = function () {
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
    // 最大堆
    this.A = new Heap();
    // 最小堆
    this.B = new Heap((x, y) => x < y);
};

MedianFinder.prototype.addNum = function (num) {
    if (this.A.size() !== this.B.size()) {
        // 当N为奇数，需要向B添加一个元素
        // 先将num插入A，再将A堆顶弹出，插入B
        this.A.insert(num);
        this.B.insert(this.A.pop());
    } else {
        // 当N为偶数，需要向A添加一个元素
        // 先将num插入B，再将B堆顶弹出，插入A
        this.B.insert(num);
        this.A.insert(this.B.pop());
    }
};

MedianFinder.prototype.findMedian = function () {
    return this.A.container.length === this.B.container.length
        ? (this.A.peek() + this.B.peek()) / 2
        : this.A.peek();
};
