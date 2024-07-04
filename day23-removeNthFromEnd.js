//First Idea:
//Use recursion?
//Create a queue to store the ref? -> maybe u can't store refs to solve the link-list problem?
//Best Solu: Use 2-pointer, 'fast' is faster than 'slow' by 'n' steps.

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  let fast = head;
  let slow = head;

  for (let i = 0; i < n; i++) fast = fast.next;
  if (fast == null) return head.next;

  while (fast.next != null) [fast, slow] = [fast.next, slow.next];
  slow.next = slow.next.next;
  return head;
};

//By Recursion, this solution is from leetcode.
var removeNthFromEndByRecur = function (head, n) {
  var result = new ListNode(0, head);
  var counter = 0;

  var getLastNode = (node) => {
    if (node.next == null) {
      counter++;
      return node;
    } else {
      var lastNode = getLastNode(node.next);

      if (counter == n) {
        node.next = lastNode.next ? lastNode.next : null;
      }

      counter++;
      return node;
    }
  };

  return getLastNode(result).next;
};

//Constructor
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//Creat & Test Data
function createListNode(length) {
  let head = new ListNode();
  let current = head;
  for (let i = 0; i < length; i++) {
    current.next = new ListNode(i * 2);
    current = current.next;
  }
  return head.next;
}

//For self-testing
function printList(head) {
  const result = [];
  for (let cur = head; cur != null; cur = cur.next) result.push(cur.val);
  console.log(result);
}

const head = createListNode(7);
printList(head);

let n = 4;
const newHead = removeNthFromEnd(head, n);
printList(newHead);
