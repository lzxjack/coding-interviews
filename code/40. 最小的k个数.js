const getLeastNumbers = (arr, k) => {
    arr.sort((a, b) => a - b);
    return arr.splice(0, k);
};
