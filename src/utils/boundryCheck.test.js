import {boundryCheck} from "./boundryCheck"

describe("Boundry check test", () => 
{
    it('should return false when both x and y coodinates are less than 0', () =>
    {
        const position = {x: -1, y: -2}
        expect(boundryCheck(position)).toEqual(false)
    })

    it('should return false when one of x and y coodinates is less than 0 while the other in range', () =>
    {
        const position = {x: -1, y: 2}
        expect(boundryCheck(position)).toEqual(false)
    })

    it('should return false when one of x and y coodinates is more than 4 while the other in range', () =>
    {
        const position = {x: 11, y: 2}
        expect(boundryCheck(position)).toEqual(false)
    })

    it('should return false when both x and y coodinates are more than 4', () =>
    {
        const position = {x: 11, y: 12}
        expect(boundryCheck(position)).toEqual(false)
    })

    it('should return true when both x and y coodinates are in range', () =>
    {
        const position = {x: 2, y: 2}
        expect(boundryCheck(position)).toEqual(true)
    })
})