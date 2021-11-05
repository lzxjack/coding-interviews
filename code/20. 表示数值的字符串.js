const isNumber = s => {
    const num = s.trim();
    return /^[+-]?(\d+(\.\d*)?|(\.\d+))(e[+-]?\d+)?$/i.test(num);
};
