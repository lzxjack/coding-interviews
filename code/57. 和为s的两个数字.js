const twoSum = (nums, target) => {
    let [left, right] = [0, nums.length - 1];
    while (left < right) {
        sum = nums[left] + nums[right];
        if (sum > target) {
            // 太大了，右指针左移
            right--;
        } else if (sum < target) {
            // 太小了，左指针右移
            left++;
        } else {
            // 找到，直接返回两个数
            return [nums[left], nums[right]];
        }
    }
    // 遍历完后没找到，返回空数组
    return [];
};
