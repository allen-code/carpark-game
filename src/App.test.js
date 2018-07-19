import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { AppConfig } from './constants/config'

describe("App test", () => 
{
  it('renders without crashing', () => 
  {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('position matches the intial state', () =>
  {
    const wrapper = shallow(<App />)
    expect(wrapper.state().position).toEqual({x: 0, y: 0})
  })

  it('face matches the intial state', () =>
  {
    const wrapper = shallow(<App />)
    expect(wrapper.state().face).toEqual(AppConfig.FACE.NORTH)
  })

  it('test state change function: handlePlaceCar', () =>
  {
    const wrapper = shallow(<App />)
    const placeCarArg = {positionx: 1, positiony: 2, face: AppConfig.FACE.EAST}
    wrapper.instance().handlePlaceCar(placeCarArg)
    expect(wrapper.state().position).toEqual({x: 1, y: 2})
  })

  it('test state change function: handleMoveCar', () =>
  {
    const wrapper = shallow(<App />)
    wrapper.instance().handleMoveCar()
    expect(wrapper.state().position).toEqual({x: 0, y: 1})
  })

  it('test state change function: handleRotateCar', () =>
  {
    const wrapper = shallow(<App />)
    wrapper.instance().handleRotateCar(AppConfig.LEFT)
    expect(wrapper.state().face).toEqual(AppConfig.FACE.WEST)
  })
})