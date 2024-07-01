//Concept:
//Create the bucket, and clearify the logic of order.

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//Constructor
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let bucketList = null;
  let currentNode = head;

  while (currentNode != null) {
    let delNode = currentNode;
    currentNode = currentNode.next;
    delNode.next = bucketList;
    bucketList = delNode;
    //   console.log(`cur: ${currentNode?.val} , buck:${bucketList.val}`);
  }
  return bucketList;
};

//Solution from leetcode, it's beautiful!
var reverseListByRecursion = function (head) {
  if (!head || !head.next) return head;
  reversedPart = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return reversedPart;
};

//For self-testing
function printList(head) {
  const result = [];
  let now = head;

  while (now != null) {
    result.push(now.val);
    now = now.next;
  }
  console.log(result);
}

//TEST DATA
let head = new ListNode(1);
let nodeA = new ListNode(2);
let nodeB = new ListNode(4);
let nodeC = new ListNode(7);
head.next = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;

printList(head);
printList(reverseList(head));
