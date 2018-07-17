import {boundryCheck} from './boundryCheck'

/*
 * Function to move car in the park
 * 
 * @param {string, object}
 * @returns {object}
 */
export const moveInPark = (face) => (position) =>
({
    "NORTH": boundryCheck({x: position.x, y: position.y + 1}) ? {x: position.x, y: position.y + 1} : position,
    "EAST": boundryCheck({x: position.x + 1, y: position.y}) ? {x: position.x + 1, y: position.y} : position,
    "SOUTH": boundryCheck({x: position.x, y: position.y - 1}) ? {x: position.x, y: position.y - 1} : position,
    "WEST": boundryCheck({x: position.x - 1, y: position.y}) ? {x: position.x - 1, y: position.y} : position
})[face]