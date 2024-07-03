//First Idea:
//Split the list into 2 parts.
//Reverse the second part, and merge them?
//Can I push these nodes into array, pop them and change their 'next' pointer ?
//Oh.. but it need the extra space.

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */

//Constructor
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reorderList = function (head) {
  const mid = findMid(head);
  const tail = reverseList(mid);

  let front = head,
    back = tail;

  while (back.next != null) {
    // let tmpA = front.next;
    // let tmpB = back.next;

    // front.next = back;
    // back.next = tmpA;
    // front = tmpA;
    // back = tmpB;
    [front.next, front] = [back, front.next];
    [back.next, back] = [front, back.next];
  }
};

function reverseList(head) {
  let cur = head;
  let bucket = null;
  while (cur != null) {
    //the syntax sugar is useful..
    [cur.next, cur, bucket] = [bucket, cur.next, cur];
  }
  return bucket;
}

function findMid(head) {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
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
reorderList(head);
printList(head);
