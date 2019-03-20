import * as Container from './app'
import * as Actions from '../../actions'

describe('App Container', () => {
  it('should dispatch appFiveDayWeatherAction', () => {
    const lat = '3'
    const lon = '5'
    const unit = 'metric'
    const testObj = { testDispatch: () => { } }
    const spyDispatch = jest.spyOn(testObj, 'testDispatch')
    const spyWeatherAction = jest.spyOn(Actions, 'appFetchWeatherAction')
    const spyFiveDayAction = jest.spyOn(Actions, 'appFetchFiveDayAction')
    Container.getGeoLocation(lat, lon, unit, spyDispatch)
    expect(spyDispatch).toBeCalled()
    expect(spyWeatherAction).toBeCalled()
    expect(spyFiveDayAction).toBeCalled()
  })
})