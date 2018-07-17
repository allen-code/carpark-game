import React from 'react'
import {placeFace} from '../utils'
import {Car} from '../blocks'
import carImage from '../assets/car.png'

const CarComponent = (props) => {
    const {face, position} = props
    const carRotation = placeFace(face)
    return (
        <Car rotation={carRotation} position={position}>
            <img src={carImage} />
        </Car>
    )
}

export default CarComponent