import * as actions from './actions'
import * as types from './constants'

describe('App actions', () => {
  let payload, response, error
  it('should create appFetchWeatherAction', () => {
    payload = {}
    expect(actions.appFetchWeatherAction(payload)).toEqual({
      type: types.APP_FETCH_WEATHER,
      payload
    })
  })
  it('should create appFetchWeatherSuccessAction', () => {
    response = {}
    expect(actions.appFetchWeatherSuccessAction(response)).toEqual({
      type: types.APP_FETCH_WEATHER_SUCCESS,
      response
    })
  })
  it('should create appFetchWeatherFailureAction', () => {
    error = 'Uh oh'
    expect(actions.appFetchWeatherFailureAction(error)).toEqual({
      type: types.APP_FETCH_WEATHER_FAILURE,
      error
    })
  })
  it('should create appFetchFiveDayAction', () => {
    payload = {}
    expect(actions.appFetchFiveDayAction(payload)).toEqual({
      type: types.APP_FETCH_FIVE_DAY,
      payload
    })
  })
  it('should create appFetchFiveDaySuccessAction', () => {
    response = {}
    expect(actions.appFetchFiveDaySuccessAction(response)).toEqual({
      type: types.APP_FETCH_FIVE_DAY_SUCCESS,
      response
    })
  })
  it('should create appFetchFiveDayFaiureAction', () => {
    error = 'Uh oh'
    expect(actions.appFetchFiveDayFailureAction(error)).toEqual({
      type: types.APP_FETCH_FIVE_DAY_FAILURE,
      error
    })
  })

})