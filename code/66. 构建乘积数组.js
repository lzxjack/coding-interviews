const constructArr = a => {
    const len = a.length;
    // 定义左累积数组、右累积数组，初始值都为 1
    const [resLeft, resRight] = [new Array(len).fill(1), new Array(len).fill(1)];
    for (let i = 1; i < len; i++) {
        // 从i=1开始，作左累积运算
        resLeft[i] = resLeft[i - 1] * a[i - 1];
    }
    for (let i = len - 2; i >= 0; i--) {
        // 从i=len - 2开始，作右累积运算
        resRight[i] = resRight[i + 1] * a[i + 1];
    }
    const res = [];
    for (let i = 0; i < len; i++) {
        // 两个数组的元素对应相乘，即可得到当前元素的答案
        res.push(resLeft[i] * resRight[i]);
    }
    return res;
};
