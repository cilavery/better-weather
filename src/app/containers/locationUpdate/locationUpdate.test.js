import * as Container from './locationUpdate'
import * as Actions from '../../actions'

describe('locationUpdate container', () => {
  it('should dispatch getGeolocation', () => {
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