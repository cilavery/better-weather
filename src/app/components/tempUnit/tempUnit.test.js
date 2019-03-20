import React from 'react'
import TempUnit from './tempUnit'
import { shallow } from 'enzyme'

describe('TempUnit Component', () => {
  let props
  beforeEach(() => {
    props = {
      unit: 'imperial',
      updateUnit: jest.fn()
    }
  })
  it('should render two dropdown values', () => {
    const wrapper = shallow(<TempUnit />)
    expect(wrapper.find('option').length).toEqual(2)
  })
  it('should call updateUnit at handleChange', () => {
    const wrapper = shallow(<TempUnit {...props} />)
    const instance = wrapper.instance()
    // const spy = jest.spyOn(props, 'updateUnit')
    instance.handleChange({ target: { value: 'metric' } })
    expect(props.updateUnit).toHaveBeenCalled()
  })
})
