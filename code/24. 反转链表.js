const reverseList = head => {
    // 定义cur指向头部
    // pre指向头部前面的null
    let [cur, pre] = [head, null];
    // 遍历链表
    while (cur) {
        // 定义next为cur下一个
        const next = cur.next;
        // cur的指向改为pre
        cur.next = pre;
        // pre改为当前cur的指向
        pre = cur;
        // cur的指向改为next的指向
        cur = next;
    }
    // 遍历结束，cur指向null，返回pre
    return pre;
};
