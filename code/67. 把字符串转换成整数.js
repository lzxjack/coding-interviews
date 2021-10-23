const strToInt = str => {
    // 去除头部空格
    str = str.trim();
    // 仅限数字0~9
    const reg = /\d/;
    // 是否为负数，默认否
    let isNega = false;
    if (str[0] === '-' || str[0] === '+') {
        // 如果第一个字符是正负号，则判断第二个字符是否是数字
        if (!reg.test(str[1])) return 0;
    } else {
        // 如果第一个字符不是正负号，则判断第一个字符是否是数字
        if (!reg.test(str[0])) return 0;
    }

    // 数字数组
    const nums = [];
    const len = str.length;
    for (let i = 0; i < len; i++) {
        // nums为空的情况下，遇到正负号
        if (!nums.length && str[i] === '-') {
            isNega = true;
            continue;
        } else if (!nums.length && str[i] === '+') {
            continue;
        }
        // 将数字字符放入nums，若遇到非数字，直接跳出循环
        if (reg.test(str[i])) {
            nums.push(str[i]);
        } else {
            break;
        }
    }
    let res = 0;
    const lenNums = nums.length;
    // 构造最后的数字
    for (let i = lenNums - 1; i >= 0; i--) {
        res += nums[i] * 10 ** (lenNums - 1 - i);
    }
    const [MIN, MAX] = [-(2 ** 31), 2 ** 31 - 1];
    // 若是负数，判断-res和MIN的大小
    // 若不是负数，判断res和MAX的大小
    return isNega ? (-res < MIN ? MIN : -res) : res > MAX ? MAX : res;
};
