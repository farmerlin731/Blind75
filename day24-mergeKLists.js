//First Idea:
//Use merge2sort for logn times ?
//How to divide and Conquer ?
//A:Set a helper, for recursion. B:Make a queue, and push the new head.

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length == 0) return null;

  while (lists.length > 1) {
    const l1 = lists.shift();
    const l2 = lists.shift();
    const headMerged = merge2Lists(l1, l2);
    lists.push(headMerged);
  }

  return lists[0];
};

function merge2Lists(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;
  return dummy.next;
}
//Constructor
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//Creat & Test Data
function createUpList(length) {
  let head = new ListNode();
  let current = head;
  let tmpVal = 0;
  for (let i = 0; i < length; i++) {
    current.next = new ListNode((tmpVal += ~~(Math.random() * 5)));
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

const headA = createUpList(3);
const headB = createUpList(5);
const headC = createUpList(1);
const headD = createUpList(7);
const headE = createUpList(0);

// printList(headA);
// printList(headB);
// printList(headC);
// printList(headD);
// printList(headE);

const lists = [headA, headB, headC, headD, headE];
const ans = mergeKLists(lists);
printList(ans);
