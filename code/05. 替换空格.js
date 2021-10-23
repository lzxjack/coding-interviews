const replaceSpace = s => {
    // 转化为数组
    const arr = s.split('');
    // 统计空格数量
    let spaceCount = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === ' ') spaceCount++;
    }
    // 更新数组长度，每个空格，要多出2个位置
    arr.length += 2 * spaceCount;
    // 定义双指针
    // left:旧长度-1
    // right:新长度-1
    let [left, right] = [len - 1, arr.length - 1];
    while (left >= 0) {
        if (arr[left] !== ' ') {
            // 如果遇到字符，直接将左指针的值赋给右指针
            arr[right] = arr[left];
        } else {
            // 遇到空格，依次填入%20，右指针左移2
            arr[right - 2] = '%';
            arr[right - 1] = '2';
            arr[right] = '0';
            right -= 2;
        }
        // 分别左移1
        left--;
        right--;
    }
    // 返回字符串
    return arr.join('');
};

// const replaceSpace = s => s.split(' ').join('%20');
