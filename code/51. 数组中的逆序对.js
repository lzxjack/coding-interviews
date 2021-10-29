const reversePairs = nums => {
    // 记录逆序
    let count = 0;
    // 归并排序
    const mergeSort = arr => {
        // arr为一个值直接返回
        if (arr.length < 2) return arr;
        // 长度为2排序返回
        if (arr.length === 2) {
            if (arr[0] <= arr[1]) return arr;
            // 记录逆序
            count++;
            return [arr[1], arr[0]];
        }
        // 获取二分位置
        const mid = arr.length >> 1;
        // 将左边部分排序
        const left = mergeSort(arr.slice(0, mid));
        // 将右边部分排序
        const right = mergeSort(arr.slice(mid));
        // 保存结果
        const res = [];
        // 两组的起始指针位置
        let [leftIndex, rightIndex] = [0, 0];
        // 循环直到两边遍历完
        while (leftIndex < left.length || rightIndex < right.length) {
            // left结束
            if (leftIndex >= left.length) {
                // 将剩余right添加到res
                res.push.apply(res, right.slice(rightIndex));
                // 跳出循环
                break;
            }
            // right结束
            if (rightIndex >= right.length) {
                // 将剩余left添加到res
                res.push.apply(res, left.slice(leftIndex));
                // 跳出循环
                break;
            }
            // 左值小
            if (left[leftIndex] <= right[rightIndex]) {
                // 将左值push
                res.push(left[leftIndex]);
                // 左下标右移
                leftIndex++;
            } else {
                //右值小
                // 将右值push
                res.push(right[rightIndex]);
                // 右下标右移
                rightIndex++;
                // 记录逆序(因为left是有序的，所以leftIndex开始都存在逆序)
                count += left.length - leftIndex;
            }
        }
        // 返回有序数组
        return res;
    };
    mergeSort(nums);
    return count;
};
