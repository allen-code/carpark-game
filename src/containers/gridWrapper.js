import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { CarComponent, GridComponent } from '../components'
import {AppConfig} from '../constants/config'

class GridWrapper extends Component {
    
    render() {
        let gameGrid, gameGridRow
        gameGrid = Array.from({length: AppConfig.COL_ROW_NUMBER}, (item, idx) =>
        {
            gameGridRow = Array.from({length: AppConfig.COL_ROW_NUMBER}, (item, index) =>
            {
                return <GridComponent key={index} />
            })
            return <Grid key={idx}>{gameGridRow}</Grid>
        })  
        
        return (
            <Grid item md={8} sm={12}>
                <Grid container>
                    {gameGrid}
                    <CarComponent 
                        direction={this.props.direction} 
                        position={this.props.position} 
                    />
                </Grid>
            </Grid>
        )
    }
}

export default GridWrapper