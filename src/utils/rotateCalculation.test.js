import { placeFace, rotateFace } from "./rotateCalculation"
import { AppConfig } from '../constants/config'

describe("rotate calculation test", () => 
{
    const keys = Object.keys(AppConfig.FACE)

    it('should return correct value to corresponding key with placeFace', () =>
    {
        expect(placeFace(AppConfig.FACE.SOUTH)).toEqual(180)
    })

    it('should return direction closewise when turning left', () =>
    {
        expect(rotateFace(AppConfig.LEFT)(AppConfig.FACE.SOUTH)).toEqual(AppConfig.FACE.EAST)
    })

    it('should return direction anticlosewise when turning right', () =>
    {
        expect(rotateFace(AppConfig.RIGHT)(AppConfig.FACE.SOUTH)).toEqual(AppConfig.FACE.WEST)
    })
})