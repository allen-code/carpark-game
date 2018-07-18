import React, { Component } from 'react'
import {AppConfig} from '../constants/config'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'

class ControllerWrapper extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            positionx: 0,
            positiony: 0,
            face: AppConfig.FACE.NORTH
        }
        this.placeCar = this.placeCar.bind(this)
    }
    handleChange = event => 
    {
        this.setState({[event.target.name]: event.target.value})
    }
    placeCar = () =>
    {
        this.props.placeCar(this.state)
    }
    render() {
        return (
            <Grid container spacing={8}>
                <form>
                <Grid container>
                    <Grid item>
                        <FormControl>
                        <InputLabel htmlFor="positionx">x axis</InputLabel>
                            <Select 
                                value={this.state.positionx}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'positionx',
                                    id: 'positionx',
                                }}    
                            >
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="positiony">y axis</InputLabel>
                            <Select 
                                value={this.state.positiony}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'positiony',
                                    id: 'positiony',
                                }}    
                            >
                                <MenuItem value={0}>0</MenuItem>
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>  
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="face">face</InputLabel>
                            <Select 
                                value={this.state.face} 
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'face',
                                    id: 'face',
                                }} 
                            >
                                {Object.keys(AppConfig.FACE).map(key => {
                                    return <MenuItem key={key} value={key}>{AppConfig.FACE[key]}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                        <FormControl>
                            <Button variant="outlined" onClick={this.placeCar.bind(this)}>{AppConfig.PLACE}</Button>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item>
                        <Button variant="outlined" onClick={this.props.moveCar.bind(this)}>{AppConfig.MOVE}</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={this.props.rotateCarLeft.bind(this)}>{AppConfig.LEFT}</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" onClick={this.props.rotateCarRight.bind(this)}>{AppConfig.RIGHT}</Button>
                    </Grid>
                </Grid>
                </form>
            </Grid>
        )
    }
}

export default ControllerWrapper