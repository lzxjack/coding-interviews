const singleNumbers = nums => {
  const temp = nums.reduce((a, b) => a ^ b, 0);

  // 此时temp是两个不同的数异或的结果
  // 寻找k，k是temp最低位为1、其余位是0的二进制数
  let k = 1;
  while ((temp & k) === 0) k = k << 1;

  let [num1, num2] = [0, 0];
  for (const num of nums) {
    // 分组，目的是将两个不同的数分开
    if (num & k) {
      num1 ^= num;
    } else {
      num2 ^= num;
    }
  }

  return [num1, num2];
};
