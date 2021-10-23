const MinStack = function () {
    this.stack = [];
};

MinStack.prototype.push = function (x) {
    this.stack.push({
        val: x,
        min: this.stack.length ? Math.min(x, this.min()) : x,
    });
};

MinStack.prototype.pop = function () {
    this.stack.pop();
};

MinStack.prototype.top = function () {
    return this.stack[this.stack.length - 1].val;
};

MinStack.prototype.min = function () {
    return this.stack[this.stack.length - 1].min;
};
