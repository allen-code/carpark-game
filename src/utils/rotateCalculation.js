import {AppConfig} from "../constants/config"

/*
 * Function to determine the degree car is facing
 * 
 * @param {string}
 * @returns {string}
 */
export const placeFace = (face) => ({
    [AppConfig.FACE.NORTH]: 0,
    [AppConfig.FACE.EAST]: 90,
    [AppConfig.FACE.SOUTH]: 180,
    [AppConfig.FACE.WEST]: 270
})[face]

/*
 * Function to calculate the degree car rotates
 * 
 * @param {string, string}
 * @returns {string}
 */
const keys = Object.keys(AppConfig.FACE)
export const rotateFace = (rotate) => (face) =>
({
    [AppConfig.LEFT]: Object.keys(AppConfig.FACE).indexOf(face) === keys.length - 1 ? keys[0] : keys[Object.keys(AppConfig.FACE).indexOf(face) + 1],
    [AppConfig.RIGHT]: Object.keys(AppConfig.FACE).indexOf(face) === 0 ? keys[keys.length - 1] : keys[Object.keys(AppConfig.FACE).indexOf(face) - 1]
})[rotate]