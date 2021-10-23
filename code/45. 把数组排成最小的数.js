const minNumber = nums => nums.sort((a, b) => `${a}${b}` - `${b}${a}`).join('');
