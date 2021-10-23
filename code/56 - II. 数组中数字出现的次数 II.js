const singleNumber = nums => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    for (const item of map) {
        if (item[1] === 1) return item[0];
    }
};
