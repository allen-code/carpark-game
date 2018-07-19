import ControllerWrapper from './controllerWrapper'
import { AppConfig } from '../constants/config'

describe("controller wrapper test", () => 
{
    const props = {
        isPlaced: false,
        position:{x:1, y: 3},
        face:AppConfig.FACE.WEST,
        placeCar:(() => {}),
        moveCar:(() => {}),
        rotateCarLeft:(() => {}),
        rotateCarRight:(() => {})
    }
    it('renders correct number of form control', () => 
    {
        const wrapper = mount(<ControllerWrapper 
            {...props}
        />)
        expect(wrapper.find("FormControl").length).toEqual(4);
    })

    it('position matches the intial state', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />)
        expect(wrapper.dive().state().positionx).toEqual(0)
        expect(wrapper.dive().state().positiony).toEqual(0)
    })

    it('face matches the intial state', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />)
        expect(wrapper.dive().state().face).toEqual(AppConfig.FACE.NORTH)
    })

    it('return correct state positionx change function: handleChange', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />).dive()
        const handleChangeArg = {target:{name: 'positionx', value: 2}}
        wrapper.instance().handleChange(handleChangeArg)
        expect(wrapper.state().positionx).toEqual(2)
    })

    it('return correct state positiony change function: handleChange', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />).dive()
        const handleChangeArg = {target:{name: 'positiony', value: 1}}
        wrapper.instance().handleChange(handleChangeArg)
        expect(wrapper.state().positiony).toEqual(1)
    })

    it('return correct state face change function: handleChange', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />).dive()
        const handleChangeArg = {target:{name: 'face', value: AppConfig.FACE.WEST}}
        wrapper.instance().handleChange(handleChangeArg)
        expect(wrapper.state().face).toEqual(AppConfig.FACE.WEST)
    })

    it('should not move car before placing when button clicked', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />)
        wrapper.dive().instance().moveCar()
        expect(wrapper.props().position.x).toEqual(1)
    })

    it('should not rotateCarLeft car before placing when button clicked', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />)
        wrapper.dive().instance().rotateCarLeft()
        expect(wrapper.props().face).toEqual(AppConfig.FACE.WEST)
    })

    it('should not rotateCarRight car before placing when button clicked', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />)
        wrapper.dive().instance().rotateCarRight()
        expect(wrapper.props().face).toEqual(AppConfig.FACE.WEST)
    })

    it('should not reportCar car before placing when button clicked', () =>
    {
        const wrapper = shallow(<ControllerWrapper 
            {...props}
        />).dive()
        wrapper.instance().reportCar()
        expect(wrapper.state().isReportActive).toEqual(false)
    })
})