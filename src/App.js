import React, { Component } from 'react'
import { Grid } from 'react-bootstrap'
import { GridWrapper } from './containers'
import { AppConfig } from './constants/config'

class App extends Component 
{
  constructor(props) 
  {
    super(props)
    this.state = {
      position: {x: 0, y: 0},
      face: AppConfig.FACE.NORTH
    }
  }

  render() 
  {
    return (
      <Grid>
        <GridWrapper 
          face={this.state.face} 
          position={this.state.position} />
      </Grid>
    )
  }
}

export default App
