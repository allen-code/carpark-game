import React, { Component } from 'react'
import {AppConfig} from '../constants/config'
import Grid from '@material-ui/core/Grid'

class ControllerWrapper extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            positionx: 0,
            positiony: 0,
            face: AppConfig.FACE.NORTH
        }
    }

    render() {
        return (
            <Grid>
            </Grid>
        )
    }
}

export default ControllerWrapper