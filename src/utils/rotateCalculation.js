import {AppConfig} from "../constants/config"

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
 * @param {string, string}
 * @returns {string}
 */
const keys = Object.keys(AppConfig.FACE)
export const rotateFace = (rotate) => (face) =>
({
    "LEFT": Object.keys(AppConfig.FACE).indexOf(face) === keys.length - 1 ? keys[0] : keys[Object.keys(AppConfig.FACE).indexOf(face) + 1],
    "RIGHT": Object.keys(AppConfig.FACE).indexOf(face) === 0 ? keys[keys.length - 1] : keys[Object.keys(AppConfig.FACE).indexOf(face) - 1]
})[rotate]