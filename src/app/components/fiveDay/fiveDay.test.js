import React from 'react'
import FiveDay from './fiveDay'
import '../../../setupTests'
import { shallow } from 'enzyme'

describe('FiveDay Component', () => {
  let props
  beforeEach(() => {
    props = {
      unit: 'imperial',
      weather: []
    }
  })
  it('should call selectAndSetWeather on componentDidMount', () => {
    const wrapper = shallow(<FiveDay {...props} />)
    const instance = wrapper.instance()
    const spy = jest.spyOn(instance, 'selectAndSetWeather')
    instance.componentDidMount()
    expect(spy).toHaveBeenCalled()
  })
  it('should render five day forecast', () => {
    const wrapper = shallow(<FiveDay {...props} />)
    wrapper.setState({
      temps: [
        {
          dt: 1553158800,
          dt_txt: "2019-03-21 09:00:00",
          main: { temp: '40.41' },
          weather: [{ id: 500, main: 'Rain', description: 'light rain' }]
        },
        {
          dt: 1553158800,
          dt_txt: "2019-03-21 09:00:00",
          main: { temp: '40.41' },
          weather: [{ id: 500, main: 'Rain', description: 'light rain' }]
        },
        {
          dt: 1553158800,
          dt_txt: "2019-03-21 09:00:00",
          main: { temp: '40.41' },
          weather: [{ id: 500, main: 'Rain', description: 'light rain' }]
        },
        {
          dt: 1553158800,
          dt_txt: "2019-03-21 09:00:00",
          main: { temp: '40.41' },
          weather: [{ id: 500, main: 'Rain', description: 'light rain' }]
        },
        {
          dt: 1553158800,
          dt_txt: "2019-03-21 09:00:00",
          main: { temp: '40.41' },
          weather: [{ id: 500, main: 'Rain', description: 'light rain' }]
        }
      ]
    })
    expect(wrapper.find('i').length).toEqual(5)
  })
})