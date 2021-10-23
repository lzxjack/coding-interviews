const reverseLeftWords = (s, k) => {
    const arr = s.split('');
    const double = [...arr, ...arr];
    const len = arr.length;
    const n = k % len;
    return double.slice(n, n + len).join('');
};

reverseLeftWords('abcd', 3);
