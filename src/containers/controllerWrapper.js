import React, { Component } from 'react'
import {AppConfig} from '../constants/config'
import { Grid, Button, Select, MenuItem, FormControl, InputLabel, Paper, Typography, withStyles } from '@material-ui/core'

const styles =
{
    paper:
    {
        padding: '10px 20px'
    }
}

class ControllerWrapper extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            positionx: 0,
            positiony: 0,
            face: AppConfig.FACE.NORTH,
            isReportActive: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.moveCar = this.moveCar.bind(this)
        this.rotateCarLeft = this.rotateCarLeft.bind(this)
        this.rotateCarRight = this.rotateCarRight.bind(this)
        this.reportCar = this.reportCar.bind(this)
    }
    handleChange = event => 
    {
        this.props.isPlaced ? this.setState({[event.target.name]: event.target.value}) : null
    }
    moveCar = () =>
    {
        this.props.isPlaced ? this.props.moveCar() : null
    }
    rotateCarLeft = () =>
    {
        this.props.isPlaced ? this.props.rotateCarLeft() : null
    }
    rotateCarRight = () =>
    {
        this.props.isPlaced ? this.props.rotateCarRight() : null
    }
    reportCar = () =>
    {
        this.props.isPlaced ? this.setState({
            ...this.state,
            isReportActive: true
        }) : null
    }
    render() {
        return (
            <Grid item md={4} sm={12}>
            <Grid container>
                <form>
                <Grid container spacing={8}>
                    <Grid item xs={3}>
                        <FormControl>
                        <InputLabel htmlFor={AppConfig.X_AXIS}>x axis</InputLabel>
                            <Select 
                                value={this.state.positionx}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: AppConfig.X_AXIS,
                                    id: AppConfig.X_AXIS,
                                }}    
                            >
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl>
                            <InputLabel htmlFor={AppConfig.Y_AXIS}>y axis</InputLabel>
                            <Select 
                                value={this.state.positiony}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: AppConfig.Y_AXIS,
                                    id: AppConfig.Y_AXIS,
                                }}    
                            >
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>  
                        </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                        <FormControl>
                            <InputLabel htmlFor="face">face</InputLabel>
                            <Select 
                                value={this.state.face} 
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "face",
                                    id: "face",
                                }} 
                            >
                                {Object.keys(AppConfig.FACE).map(key => {
                                    return <MenuItem key={key} value={key}>{AppConfig.FACE[key]}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs>
                        <FormControl>
                            <Button variant={AppConfig.OUTLINED} onClick={() => this.props.placeCar(this.state)}>{AppConfig.PLACE}</Button>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={8}>
                    <Grid item xs={3}>
                        <Button variant={AppConfig.OUTLINED} onClick={this.moveCar}>{AppConfig.MOVE}</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant={AppConfig.OUTLINED} onClick={this.rotateCarLeft}>{AppConfig.LEFT}</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant={AppConfig.OUTLINED} onClick={this.rotateCarRight}>{AppConfig.RIGHT}</Button>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant={AppConfig.OUTLINED} onClick={this.reportCar}>{AppConfig.REPORT}</Button>
                    </Grid>
                </Grid>
                    {this.state.isReportActive ?
                        <Grid container spacing={8}>
                            <Grid item>
                                <Paper className={this.props.classes.paper} elevation={1}>
                                    <Typography variant="headline" component="h3">
                                        Current position is:
                                    </Typography>
                                    <Typography component="p">
                                        X: {this.props.position.x}, Y: {this.props.position.y}, face: {this.props.face}
                                    </Typography>
                                </Paper>
                            </Grid>
                        </Grid> : null
                    }
                </form>
            </Grid>
            </Grid>
        )
    }
}

export default withStyles(styles)(ControllerWrapper)