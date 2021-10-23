const search = (nums, target) => {
    // 定义上下限、找到的标志flag
    let [low, high, flag] = [0, nums.length - 1, null];

    while (low <= high) {
        const mid = (low + high) >> 1;
        const midNum = nums[mid];
        if (midNum > target) {
            high = mid - 1;
        } else if (midNum < target) {
            low = mid + 1;
        } else {
            // 如果找到了，将mid赋值给flag，存的是索引
            flag = mid;
            // 找到一个，直接退出循环
            break;
        }
    }
    // while结束后，判断是否找到，没找到直接返回0
    if (flag === null) return 0;

    // 从flag开始，向两边扩散
    low = high = flag;
    while (nums[low - 1] === target) low--;
    while (nums[high + 1] === target) high++;

    // 返回计数
    return high - low + 1;
};
