const findContinuousSequence = target => {
  const res = [];
  const window = [1, 2];
  let sum = 3;

  while (window[0] <= target >> 1) {
    if (sum < target) {
      const num = window[window.length - 1] + 1;
      sum += num;
      window.push(num);
    } else if (sum > target) {
      sum -= window.shift();
    } else {
      res.push([...window]);
      sum -= window.shift();
    }
  }
  return res;
};
