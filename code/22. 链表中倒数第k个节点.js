const getKthFromEnd = (head, k) => {
    let fast, slow;
    fast = slow = head;
    while (k--) {
        // 快指针先走k步
        fast = fast.next;
    }
    while (fast) {
        // 再一起走，知道快指针走到头
        fast = fast.next;
        slow = slow.next;
    }
    // 此时的慢指针指的就是倒数第k个
    return slow;
};
