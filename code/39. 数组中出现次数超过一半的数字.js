// 摩尔投票
const majorityElement = nums => {
    let count = 1;
    let majority = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
        }
        if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }
    }
    return majority;
};

// 栈抵消
// const majorityElement = nums => {
//     let stack = [nums[0]];
//     for (let i = 1; i < nums.length; i++) {
//         // 如果栈空，则直接入栈，跳过此轮循环
//         if (stack.length === 0) {
//             stack.push(nums[i]);
//             continue;
//         }

//         if (stack[stack.length - 1] === nums[i]) {
//             // 相等入栈
//             stack.push(nums[i]);
//         } else {
//             // 不相等出栈
//             stack.pop();
//         }
//     }
//     // 返回栈顶元素
//     return stack[stack.length - 1];
// };

// 排序后取中值
const majorityElement = nums => {
    nums.sort((a, b) => a - b);
    return nums[nums.length >> 1];
};
