import {boundryCheck} from './boundryCheck'
import {AppConfig} from '../constants/config'

/*
 * Function to move car in the park
 * 
 * @param {string, object}
 * @returns {object}
 */
export const moveInPark = (face) => (position) =>
({
    [AppConfig.FACE.NORTH]: boundryCheck({x: position.x, y: position.y + 1}) ? {x: position.x, y: position.y + 1} : position,
    [AppConfig.FACE.EAST]: boundryCheck({x: position.x + 1, y: position.y}) ? {x: position.x + 1, y: position.y} : position,
    [AppConfig.FACE.SOUTH]: boundryCheck({x: position.x, y: position.y - 1}) ? {x: position.x, y: position.y - 1} : position,
    [AppConfig.FACE.WEST]: boundryCheck({x: position.x - 1, y: position.y}) ? {x: position.x - 1, y: position.y} : position
})[face]