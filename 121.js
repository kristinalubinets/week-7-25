/*********************************************** Best Time to Buy and Sell Stock ************************************** */
/**
 * @param {number[]} prices
 * @return {number}
 */

 var maxProfit = function(prices) {
    
    let largestDifference = 0;
    let currentDifference = 0;
    
    for(let buyDay = 0; buyDay < prices.length; buyDay++) {
        for( let sellDay = buyDay+1; sellDay < prices.length; sellDay++) {
            currentDifference =  prices[sellDay] - prices[buyDay];
            
            if(currentDifference > largestDifference){
                largestDifference = currentDifference;
            }
        }           
    }  
    return largestDifference;
};



/************************************************************************** */
var maxProfit = function(prices) {
    
    let profit = 0;
    let minDay = prices[0];
    
    for(let i = 1; i < prices.length; i++) {
           
           if(prices[i] < minDay) {
                minDay = prices[i];
            } else {
                profit = Math.max(profit, prices[i] - minDay);    
            }
        }
    
    return profit;
};



/************************************************************************* */
function maxProfit(prices){
    let minSoFar = prices[0];
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        minSoFar = Math.min(prices[i], minSoFar);
        maxProfit = Math.max(maxProfit, prices[i] - minSoFar)
    }
    return maxProfit;
}