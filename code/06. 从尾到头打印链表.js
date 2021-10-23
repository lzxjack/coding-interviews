const reversePrint = head => {
    const stack = [];
    const res = [];
    while (head) {
        stack.push(head.val);
        head = head.next;
    }
    const len = stack.length;
    for (let i = 0; i < len; i++) {
        res.push(stack.pop());
    }
    return res;
};
