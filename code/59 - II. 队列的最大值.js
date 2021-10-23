class MaxQueue {
    constructor() {
        this.queue = [];
        // 单调递减队列
        this.maxQueue = [];
    }
    max_value() {
        // 取出单调递减队列中的第一个元素
        return this.maxQueue.length ? this.maxQueue[0] : -1;
    }
    push_back(value) {
        this.queue.push(value);
        // 将单调递减队列中所有比value小的元素全部去除，保证其单调递减
        while (this.maxQueue.length && value > this.maxQueue[this.maxQueue.length - 1]) {
            this.maxQueue.pop();
        }
        this.maxQueue.push(value);
    }
    pop_front() {
        if (!this.maxQueue.length) return -1;
        // 保证若queue中元素弹出，maxQueue中相同元素也被弹出
        if (this.queue[0] === this.maxQueue[0]) this.maxQueue.shift();
        return this.queue.shift();
    }
}
