const singleNumbers = nums => {
    let temp = 0;
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        temp = temp ^ nums[i];
    }
    // 此时temp是两个不同的数异或的结果
    // 寻找k，k是temp最低位为1、其余位是0的二进制数
    let k = 1;
    while ((temp & k) === 0) k = k << 1;

    let [num1, num2] = [0, 0];
    for (let i = 0; i < len; i++) {
        // 分组，目的是将两个不同的数分开
        if (nums[i] & k) {
            num1 = num1 ^ nums[i];
        } else {
            num2 = num2 ^ nums[i];
        }
    }
    return [num1, num2];
};
