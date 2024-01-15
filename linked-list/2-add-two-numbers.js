// 2. Add Two Numbers
// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// =====================================================

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let num1 = parseList(l1);
  let num2 = parseList(l2);

  if (typeof num1 === "bigint") num2 = BigInt(num2);
  if (typeof num2 === "bigint") num1 = BigInt(num1);

  const arr = (num1 + num2)
    .toString()
    .split("")
    .reverse()
    .map((n) => parseInt(n));
  let prev, head;
  for (const n of arr) {
    const newNode = new ListNode(n);
    if (!prev) {
      prev = newNode;
      head = newNode;
    } else {
      prev.next = newNode;
      prev = prev.next;
    }
  }

  return head;
};

function parseList(n) {
  let curr = n;
  let str = "";
  while (curr) {
    str = curr?.val + str;
    curr = curr?.next;
  }
  return Number(str) > Number.MAX_SAFE_INTEGER ? BigInt(str) : parseInt(str);
}
