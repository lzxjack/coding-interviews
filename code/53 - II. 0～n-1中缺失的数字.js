const missingNumber = nums => {
    let [low, high] = [0, nums.length - 1];
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (nums[mid] === mid) {
            // 左半边是完整的
            low = mid + 1;
        } else {
            // 左半边不完整
            high = mid - 1;
        }
    }
    return low;
};
