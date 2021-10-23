const exchange = nums => {
    const [odd, even] = [[], []];
    for (const num of nums) {
        if (num % 2) {
            odd.push(num);
        } else {
            even.push(num);
        }
    }
    return [...odd, ...even];
};
