//First Idea:
//Use DFS to clone the node, the parameter is 'oriNode' & 'cloneNode'.
//Can we add the proper 'isVisited' at '_Node' ?
//Or just add a hashMap to check if the node is visited?

// Definition for a _Node.
function _Node(val, neighbors) {
  this.val = val === undefined ? 0 : val;
  this.neighbors = neighbors === undefined ? [] : neighbors;
}

/**
 * @param {_Node} node
 * @return {_Node}
 */
var cloneGraph = function (node) {
  if (!node) return null;

  const nodeHashMap = {};
  //Maybe object can be the key ?
  //Turn into the node.val
  function dfsClone(node) {
    if (nodeHashMap[node.val]) return nodeHashMap[node.val];

    const clonedNode = new _Node(node.val, []);
    nodeHashMap[node.val] = clonedNode;

    for (const oriNB of node.neighbors) {
      clonedNode.neighbors.push(dfsClone(oriNB));
    }
    return clonedNode;
  }
  return dfsClone(node);
};

//The following solu is from Leetcode:
//https://leetcode.com/problems/clone-graph/solutions/3392084/javascript-php-bfs-dfs-approaches/

var cloneGraphByBFS = function (node) {
  // BFS approach
  // 1. create a new node
  // 2. add the new node to the queue
  // 3. add the new node to the visited map
  // 4. while the queue is not empty
  // 5.    get the first node from the queue
  // 6.    for each neighbor of the node
  // 7.        if the neighbor is not in the visited map
  // 8.            create a new node
  // 9.            add the new node to the queue
  // 10.           add the new node to the visited map
  // 11.       add the new node to the neighbors of the new node
  if (!node) return null;

  let newNode = new Node(node.val);
  let queue = [node];
  let visited = new Map();
  visited.set(node, newNode);

  while (queue.length > 0) {
    let currentNode = queue.shift();
    for (let neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        let newNeighbor = new Node(neighbor.val);
        queue.push(neighbor);
        visited.set(neighbor, newNeighbor);
      }
      visited.get(currentNode).neighbors.push(visited.get(neighbor));
    }
  }
  return newNode;
};

//TEST DATA
const Node1 = new _Node(1);
const Node2 = new _Node(2);
const Node3 = new _Node(3);
const Node4 = new _Node(4);
Node1.neighbors = [Node2, Node4];
Node2.neighbors = [Node1, Node3];
Node3.neighbors = [Node2, Node4];
Node4.neighbors = [Node1, Node3];

console.log(cloneGraph(Node1));
