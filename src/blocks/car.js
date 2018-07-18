import styled from 'styled-components'

const Car = styled.div`
    width: 80px;
    height: 80px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(${props => 86 * props.position.x}px, ${props => 86 * (4 - props.position.y)}px);
    img {
        transform: rotate(${props => props.rotation}deg);
        width: 30px;
        height: 60px;
    }
`

export default Car