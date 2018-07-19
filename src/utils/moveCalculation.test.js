import { moveInPark } from "./moveCalculation"
import { AppConfig } from '../constants/config'

describe("move calculation test", () => 
{
    it('should move 1 grid when not at carpark boundry', () =>
    {
        const face = AppConfig.FACE.NORTH
        const position = {x: 2, y: 2}
        const assertedposition = {x: 2, y: 3}
        expect(moveInPark(face)(position)).toEqual(assertedposition)
    })

    it('should move 1 grid when facing towards opposite direction of boundry', () =>
    {
        const face = AppConfig.FACE.EAST
        const position = {x: 0, y: 2}
        const assertedposition = {x: 1, y: 2}
        expect(moveInPark(face)(position)).toEqual(assertedposition)
    })

    it('should move 1 grid when facing aligning with boundry', () =>
    {
        const face = AppConfig.FACE.SOUTH
        const position = {x: 0, y: 2}
        const assertedposition = {x: 0, y: 1}
        expect(moveInPark(face)(position)).toEqual(assertedposition)
    })

    it('should stays when facing towards boundry', () =>
    {
        const face = AppConfig.FACE.WEST
        const position = {x: 0, y: 2}
        const assertedposition = {x: 0, y: 2}
        expect(moveInPark(face)(position)).toEqual(assertedposition)
    })

    it('should stays when facing towards boundry in a corner', () =>
    {
        const face = AppConfig.FACE.SOUTH
        const position = {x: 0, y: 0}
        const assertedposition = {x: 0, y: 0}
        expect(moveInPark(face)(position)).toEqual(assertedposition)
    })
})