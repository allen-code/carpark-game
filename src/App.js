import React, { Component } from 'react'
import { GridWrapper, ControllerWrapper } from './containers'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import { AppConfig } from './constants/config'
import { moveInPark, rotateFace, placeFace } from './utils'

class App extends Component 
{
  constructor(props) 
  {
    super(props)
    this.state = {
      position: {x: 0, y: 0},
      face: AppConfig.FACE.NORTH,
      isPlaced: false,
      isSmallDevice: false
    }
    this.handlePlaceCar = this.handlePlaceCar.bind(this)
    this.handleMoveCar = this.handleMoveCar.bind(this)
    this.handleRotateCar = this.handleRotateCar.bind(this)
    this.handleWindowResize = this.handleWindowResize.bind(this)
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onWindowResize);
  }

  handleWindowResize = () => {
    this.setState({ isSmallDevice: window.innerWidth < 780 });
  }

  handlePlaceCar(e)
  {
    this.setState({
      ...this.state,
      position: {x: e.positionx, y:e.positiony},
      face: e.face,
      isPlaced: true
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
      <Hidden xsDown>
        <Grid container>
          <GridWrapper 
            direction={placeFace(this.state.face)} 
            position={this.state.position} />
          <ControllerWrapper
            isPlaced={this.state.isPlaced}
            position={this.state.position}
            face={this.state.face}
            placeCar={this.handlePlaceCar}
            moveCar={this.handleMoveCar}
            rotateCarLeft={() => this.handleRotateCar(AppConfig.LEFT)}
            rotateCarRight={() => this.handleRotateCar(AppConfig.RIGHT)}
          />
        </Grid>
      </Hidden>
    )
  }
}

export default App
