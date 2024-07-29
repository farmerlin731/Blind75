//First Idea: (graph is hard Q_Q)
//Use DFS to expand the land, and then check the number?
//Oh... the point is that: u should transfer the node '1' which u visited into '0'.

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  function dfs(row, col) {
    if (
      row < 0 ||
      col < 0 ||
      row >= grid.length ||
      col >= grid[row].length ||
      grid[row][col] == "0"
    ) {
      return;
    }
    // console.log(`count:${count} , row:${row} , col:${col}`);
    // grid[[(row, col)]] = 0; //oh my god XD
    grid[row][col] = "0";
    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] == "1") {
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};

// let grid = [
//   ["1", "1", "0", "0", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "1", "0", "0"],
//   ["0", "0", "0", "1", "1"],
// ];

let grid = [
  ["1", "1", "1"],
  ["0", "1", "0"],
  ["1", "1", "1"],
];

console.log(numIslands(grid));
console.log(grid);
