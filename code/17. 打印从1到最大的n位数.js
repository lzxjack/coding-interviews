const printNumbers = n => {
    let max = 10 ** n - 1;
    const res = [];
    for (let i = 1; i <= max; i++) {
        res.push(i);
    }
    return res;
};
