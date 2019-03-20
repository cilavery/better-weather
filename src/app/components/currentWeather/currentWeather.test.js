import React from 'react'
import CurrentWeather from './currentWeather'
import { shallow } from 'enzyme'

describe('currentWeather component', () => {
  let props
  beforeEach(() => {
    props = {
      weather: {
        main: {
          temp: '51.4',
          name: 'New York'
        },
        weather: [
          {
            main: 'Clear',
            id: '800',
            description: 'clear'
          }
        ]
      },
      unit: 'imperial'
    }
  })
  it('should render current day\'s temperature', () => {
    const wrapper = shallow(<CurrentWeather {...props} />)
    expect(wrapper.state('temp')).toEqual(51)
  })
  it('should render converted temperature if user changes temp unit', () => {
    const wrapper = shallow(<CurrentWeather {...props} />)
    wrapper.setProps({ unit: 'metric' })
    expect(wrapper.find('.temp-text').text()).toEqual('11')
  })
})