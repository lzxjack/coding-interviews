const singleNumbers = nums => {
    // res是两个不同的数，异或的结果
    let res = 0;
    nums.forEach(num => (res ^= num));

    // target用来找两个不同的数，在二进制哪一位上不同
    // target初始值0001
    let target = 1;
    while ((target & res) === 0) {
        target = target << 1;
    }

    // 分成两组，两组分别与a、b异或
    let [a, b] = [0, 0];
    nums.forEach(num => {
        if ((num & target) === 0) {
            a ^= num;
        } else {
            b ^= num;
        }
    });
    return [a, b];
};
