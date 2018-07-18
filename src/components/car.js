import React from 'react'
import {Car} from '../blocks'
import carImage from '../assets/car.png'

const CarComponent = (props) => {
    const {direction, position} = props
    return (
        <Car rotation={direction} position={position}>
            <img src={carImage} />
        </Car>
    )
}

export default CarComponent