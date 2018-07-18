import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { CarComponent, GridComponent } from '../components'

class GridWrapper extends Component {
    render() {
        return (
                <Grid container>
                    <Grid>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Grid>
                    <Grid>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Grid>
                    <Grid>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Grid>
                    <Grid>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Grid>
                    <Grid>
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                        <GridComponent />
                    </Grid>
                    <CarComponent 
                        direction={this.props.direction} 
                        position={this.props.position} 
                    />
                </Grid>
        )
    }
}

export default GridWrapper