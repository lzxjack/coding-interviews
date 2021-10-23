const firstUniqChar = str => {
    if (!str) return ' ';
    const m = new Map();
    for (const s of str) {
        m.set(s, (m.get(s) || 0) + 1);
    }
    for (const s of m) {
        if (s[1] === 1) return s[0];
    }
    return ' ';
};
