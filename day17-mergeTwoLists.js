//Note:
//Don't need to set another refs for list1/list2.
//Because after merge, the next of middle nodes will change.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//Constructor
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

//Ans
var mergeTwoLists = function (list1, list2) {
  let tmpA = list1;
  let tmpB = list2;
  let Head = null;
  if (list1 == null) {
    Head = list2;
    return Head;
  } else if (list2 == null) {
    Head = list1;
    return Head;
  }

  if (tmpA.val < tmpB.val) {
    Head = tmpA;
    tmpA = tmpA.next;
  } else {
    Head = tmpB;
    tmpB = tmpB.next;
  }

  let tmpAns = Head;

  while (tmpA != null && tmpB != null) {
    if (tmpA.val < tmpB.val) {
      tmpAns.next = tmpA;
      tmpA = tmpA.next;
    } else {
      tmpAns.next = tmpB;
      tmpB = tmpB.next;
    }
    tmpAns = tmpAns.next;
  }

  if (tmpA != null) tmpAns.next = tmpA;
  if (tmpB != null) tmpAns.next = tmpB;

  return Head;
};

var mergeTwoListsForLoop = function (l1, l2) {
  let tempNode = new ListNode(0, null);
  let currentNode = tempNode;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      currentNode.next = l1;
      l1 = l1.next;
    } else {
      currentNode.next = l2;
      l2 = l2.next;
    }
    currentNode = currentNode.next;
  }
  currentNode.next = l1 || l2;

  return tempNode.next;
};

var mergeTwoListsRecursion = function (l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val <= l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

//TEST DATA
// let list1 = new ListNode(1);
// let nodeA = new ListNode(2);
// let nodeB = new ListNode(4);
// list1.next = nodeA;
// nodeA.next = nodeB;

// let list2 = new ListNode(1);
// let nodeC = new ListNode(3);
// let nodeD = new ListNode(4);
// list2.next = nodeC;
// nodeC.next = nodeD;

printList(mergeTwoLists(list1, list2));
