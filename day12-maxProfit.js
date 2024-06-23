//First Idea:
//Set 'b-day' and 's-day'.
//if the value is smaller than 'b-day', update & recalculate it.

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let priceBuy = prices[0],
    tmpProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    tmpProfit = Math.max(prices[i] - priceBuy, tmpProfit);
    if (prices[i] < priceBuy) priceBuy = prices[i];
  }
  return tmpProfit;
};

var maxProfitBefore = function (prices) {
  let totalProfit = 0;
  let min = 10000;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
      max = 0;
    } else if (prices[i] > max) {
      max = prices[i];
    }
    totalProfit = Math.max(max - min, totalProfit);
  }
  return totalProfit;
};

let prices = [7, 1, 5, 3, 6, 4];
// let prices = [7, 6, 4, 3, 1];

console.log(maxProfit(prices));
