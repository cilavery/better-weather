import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { Spinner } from '../../shared'
import '../../../setupTests'
import { shallow } from 'enzyme'

describe('App Component', () => {
  let props
  beforeEach(() => {
    props = {
      getGeoLocation: () => { },
      unit: 'metric',
      weather: {},
      fiveDay: []
    }
  })
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('should render text for user to input city if geolocation is not enabled', () => {
    const wrapper = shallow(<App {...props} />)
    wrapper.setState({ locationEnabled: false })
    expect(wrapper.find('.message').length).toEqual(1)
  })
  it('should render spinner if weather data & forecast data isFetching is true', () => {
    let newProps = { ...props }
    newProps.weather.isFetching = true
    const wrapper = shallow(<App {...newProps} />)
    expect(wrapper.find(Spinner).length).toEqual(2)
  })
  it('should render error text if there is a weather fetchError', () => {
    let newProps = { ...props }
    newProps.weather.fetchError = true
    const wrapper = shallow(<App {...props} />)
    wrapper.setState({ locationEnabled: false })
    expect(wrapper.find('.message').length).toEqual(2)
  })

})

