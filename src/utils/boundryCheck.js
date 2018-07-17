/*
 * Function to check if the car is within boundry
 * 
 * @param {object}
 * @returns {boolean}
 */
export const boundryCheck = (position) =>
{
    return Object.values(position).every(betweenZeroAndFour)
}

/*
 * Function to check if the number is within range
 * 
 * @param {number}
 * @returns {boolean}
 */
function betweenZeroAndFour(num)
{
    return num >= 0 && num <= 4
}