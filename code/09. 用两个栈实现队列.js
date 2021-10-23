var CQueue = function () {
    this.stackA = [];
    this.stackB = [];
};

CQueue.prototype.appendTail = function (value) {
    this.stackA.push(value);
};

CQueue.prototype.deleteHead = function () {
    if (this.stackB.length) {
        return this.stackB.pop();
    } else {
        while (this.stackA.length) {
            this.stackB.push(this.stackA.pop());
        }
        if (!this.stackB.length) {
            return -1;
        } else {
            return this.stackB.pop();
        }
    }
};
