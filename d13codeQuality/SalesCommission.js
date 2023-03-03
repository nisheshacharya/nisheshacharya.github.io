/**
 * 
 * @param {boolean}  isSalaried is salaid or not. 
 * @param {Number} salesAmount  the amount of sales money. 
 * @returns {Number} commission.
 */
function computeSalesCommission(isSalaried, salesAmount) {
    if (isSalaried) {
        if (salesAmount < 300) {
            return 0;
        } else if (salesAmount < 500) {
            return 0.01 * salesAmount;
        } else {
            return (0.01 * 500) + 0.02 * (salesAmount - 500);
        }
    } else {
        if (salesAmount < 300) {
            return 0;
        } else if (salesAmount < 500) {
            return 0.02 * salesAmount;
        } else {
            return (0.02 * 500) + 0.03 * (salesAmount - 500);
        }
    }

} 
export default computeSalesCommission;
