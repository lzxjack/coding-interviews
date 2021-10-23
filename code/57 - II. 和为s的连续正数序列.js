const findContinuousSequence = target => {
    let [left, right] = [1, 1];
    let sum = 0;
    const res = [];
    while (left <= target >> 1) {
        sum = ((left + right) * (right - left + 1)) >> 1;
        if (sum < target) {
            right++;
        } else if (sum > target) {
            left++;
        } else {
            const res_item = [];
            for (let i = left; i <= right; i++) {
                res_item.push(i);
            }
            res.push(res_item);
            left++;
        }
    }
    return res;
};
