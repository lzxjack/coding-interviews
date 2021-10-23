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

const nthUglyNumber = n => {
    // 因数
    const factors = [2, 3, 5];
    // 创建最小堆
    const heap = new Heap((x, y) => x < y);
    const set = new Set();
    // 最小的丑数1入堆、加入set
    heap.insert(1);
    set.add(1);
    let ugly;
    for (let i = 0; i < n; i++) {
        // 弹出堆中最小的丑数
        ugly = heap.pop();
        for (const factor of factors) {
            // 下一个丑数
            const next = ugly * factor;
            // 判断是否已经加入过了
            if (!set.has(next)) {
                set.add(next);
                heap.insert(next);
            }
        }
    }
    // 执行n次，返回第n个丑数
    return ugly;
};
