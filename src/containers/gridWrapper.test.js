import GridWrapper from './gridWrapper'

describe("grid wrapper test", () => 
{
    const props = {
        direction: 180,
        position:{x:2, y:2} 
    }
    it('should match the correct snapshot', () => 
    {
        const wrapper = mount(<GridWrapper 
            {...props}
        />)
        expect(wrapper).toMatchSnapshot()
    })

    it('should match number of grid', () =>
    {
        const wrapper = mount(<GridWrapper 
            {...props}
        />)
        expect(wrapper.find("Grid").length).toEqual(7);
    })

})