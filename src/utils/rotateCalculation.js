/*
 * Function to determine the degree car is facing
 * 
 * @param {string}
 * @returns {string}
 */
export const placeFace = (face) => ({
    "NORTH": 0,
    "EAST": 90,
    "SOUTH": 180,
    "WEST": 270
})[face]


/*
 * Function to calculate the degree car rotates
 * 
 * @param {string}
 * @returns {string}
 */
export const rotateFace = (direction) => (current) =>
({
    "LEFT": (current - 90),
    "RIGHT": (current + 90)
})[direction]