const isStraight = nums => {
    const set = new Set();
    // 初始化最大值，最小值
    let [max, min] = [0, 14];
    for (const num of nums) {
        // 遇到王，跳过
        if (num === 0) continue;
        // 更新最大值
        max = Math.max(max, num);
        // 更新最小值
        min = Math.min(min, num);
        // 如果牌重复，肯定不是顺子
        if (set.has(num)) return false;
        // 牌加入set
        set.add(num);
    }
    // 除了大小王之外，若最大牌和最小牌之差小于5，则可以是顺子
    return max - min < 5;
};
