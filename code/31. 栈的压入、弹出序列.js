const validateStackSequences = (pushed, popped) => {
    const stack = [];
    let index = 0;
    const len = pushed.length;
    for (let i = 0; i < len; i++) {
        stack.push(pushed[i]);
        while (popped[index] !== undefined && popped[index] === stack[stack.length - 1]) {
            stack.pop();
            index++;
        }
    }
    return !stack.length;
};

console.log(validateStackSequences([0], [0]));
