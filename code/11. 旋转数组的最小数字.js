const minArray = numbers => {
    let [low, high] = [0, numbers.length - 1];
    while (low <= high) {
        const mid = (low + high) >> 1;
        if (numbers[mid] > numbers[high]) {
            // 最小值一定在mid右侧
            low = mid + 1;
        } else if (numbers[mid] < numbers[high]) {
            // 最小值在mid左侧，或者mid就是最小值
            high = mid;
        } else {
            high--;
        }
    }
    return numbers[low];
};
