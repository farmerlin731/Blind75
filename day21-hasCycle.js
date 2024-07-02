//First Idea:
//Set a pointer for 'next'.
//And do for-loop until the 'next' be the same or 'null'.
//But if the cycle happen in the middle.. Q_Q
//Solu A : Create a set and check if the set is in the set.
//Solu B : Use 'two-pointer', check if 'fast' & 'slow' will meet each other.

//Constructor
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    console.log(fast.val);
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};

//TEST DATA
let head = new ListNode(1);
let nodeA = new ListNode(2);
let nodeB = new ListNode(4);
let nodeC = new ListNode(7);
let nodeD = new ListNode(10);
head.next = nodeA;
nodeA.next = nodeB;
nodeB.next = nodeC;
nodeC.next = nodeD;
// nodeD.next = nodeA;

console.log(hasCycle(head));
