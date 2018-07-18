import React, { Component } from 'react'
import { GridWrapper, ControllerWrapper } from './containers'
import Grid from '@material-ui/core/Grid'
import { AppConfig } from './constants/config'
import { moveInPark, rotateFace, placeFace } from './utils'

class App extends Component 
{
  constructor(props) 
  {
    super(props)
    this.state = {
      position: {x: 0, y: 0},
      face: AppConfig.FACE.NORTH
    }
    this.handlePlaceCar = this.handlePlaceCar.bind(this)
    this.handleMoveCar = this.handleMoveCar.bind(this)
    this.handleRotateCar = this.handleRotateCar.bind(this)
  }

  handlePlaceCar(e)
  {
    this.setState({
      ...this.state,
      position: {x: e.positionx, y:e.positiony},
      face: e.face
    })
  }

  handleMoveCar()
  {
    let newState = Object.assign({}, this.state)
    newState.position = moveInPark(this.state.face)(this.state.position)
    this.setState(newState)
  }

  handleRotateCar(direction)
  {
    let newState = Object.assign({}, this.state)
    newState.face = rotateFace(direction)(this.state.face)
    this.setState(newState)
  }

  render() 
  {
    return (
      <Grid>
        <GridWrapper 
          direction={placeFace(this.state.face)} 
          position={this.state.position} />
        <ControllerWrapper
          position={this.state.position}
          face={this.state.face}
          placeCar={this.handlePlaceCar}
          moveCar={this.handleMoveCar}
          rotateCarLeft={() => this.handleRotateCar(AppConfig.LEFT)}
          rotateCarRight={() => this.handleRotateCar(AppConfig.RIGHT)}
        />
      </Grid>
    )
  }
}

export default App
