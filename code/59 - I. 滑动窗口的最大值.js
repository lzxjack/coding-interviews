// const maxSlidingWindow = (nums, k) => {
//     const res = [];
//     const len = nums.length;
//     if (!len) return res;
//     for (let i = 0; i <= len - k; i++) {
//         const temp = [];
//         for (let j = i; j < i + k; j++) {
//             temp.push(nums[j]);
//         }
//         res.push(Math.max(...temp));
//     }
//     return res;
// };

const maxSlidingWindow = (nums, k) => {
    const len = nums.length;
    if (!len) return [];
    // q存放的是nums的下标i
    const q = [];
    for (let i = 0; i < k; i++) {
        // 循环比较当前元素和q队尾对应的元素大小，若当前元素大，将队尾元素出队
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
    }
    // 这时候q的队头元素对应的值，肯定是初始窗口中最大的
    const res = [nums[q[0]]];
    for (let i = k; i < len; i++) {
        // 窗口开始滑动，做之前相同的操作
        while (q.length && nums[i] >= nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        // 窗口滑动，将不应该在窗口中的元素弹出
        while (q[0] <= i - k) q.shift();
        // 这时候q的队头元素对应的值，肯定是当前窗口中最大的
        res.push(nums[q[0]]);
    }
    return res;
};
