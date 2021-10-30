const reverseLeftWords = (s, k) => {
    const len = s.length;
    const n = k % len;
    const double = `${s}${s}`;
    return double.slice(n, n + len);
};
