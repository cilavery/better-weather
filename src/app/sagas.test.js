import { call, put, takeLatest } from 'redux-saga/effects'
import {
  watchWeatherByGeo,
  weatherFetchByGeoFlow,
  weatherFetchFiveDayByGeoFlow,
  watchFiveDayByGeo
} from './sagas'
import {
  appFetchWeatherByGeoSuccessAction,
  appFetchWeatherByGeoFailureAction,
  appFetchFiveDayByGeoSuccessAction,
  appFetchFiveDayByGeoFailureAction
} from './actions'
import {
  APP_FETCH_WEATHER_GEO,
  APP_FETCH_FIVE_DAY_GEO
} from './constants'
import {
  fetchWeatherByGeo,
  fetchFiveDayByGeo
} from './api'

jest.mock('./api')

describe('Current Weather Saga', () => {
  describe('weatherFetchByGeoFlow', () => {
    let payload
    beforeEach(() => {
      payload = {}
    })
    it('should call fetchWeatherByGeo api', () => {
      const gen = weatherFetchByGeoFlow({ payload })
      expect(gen.next().value).toEqual(call(fetchWeatherByGeo, payload))
    })

    it('should put appFetchWeatherByGeoSuccessAction', () => {
      const response = {}
      const gen = weatherFetchByGeoFlow({ payload })
      gen.next()
      expect(gen.next(response).value).toEqual(put(appFetchWeatherByGeoSuccessAction(response)))
    })

    it('should put appFetchWeatherByGeoFailure Action', () => {
      const error = {}
      const gen = weatherFetchByGeoFlow({ payload })
      gen.next()
      expect(gen.throw(error).value).toEqual(put(appFetchWeatherByGeoFailureAction(error)))
    })
  })

  describe('watchWeatherByGeo', () => {
    it('should call weatherFetchByGeoFlow', () => {
      const gen = watchWeatherByGeo()
      expect(gen.next().value).toEqual(takeLatest(APP_FETCH_WEATHER_GEO, weatherFetchByGeoFlow))
    })
  })
})

describe('5-Day Forecast Saga', () => {
  describe('weatherFetchFiveDayByGeoFlow', () => {
    let payload
    beforeEach(() => {
      payload = {}
    })
    it('should call fetchFiveDayByGeo api', () => {
      const gen = weatherFetchFiveDayByGeoFlow({ payload })
      expect(gen.next().value).toEqual(call(fetchFiveDayByGeo, payload))
    })

    it('should put appFetchFiveDayByGeoSuccessAction', () => {
      const response = {}
      const gen = weatherFetchFiveDayByGeoFlow({ payload })
      gen.next()
      expect(gen.next(response).value).toEqual(put(appFetchFiveDayByGeoSuccessAction(response)))
    })

    it('should put appFetchFiveDayByGeoFailure Action', () => {
      const error = {}
      const gen = weatherFetchFiveDayByGeoFlow({ payload })
      gen.next()
      expect(gen.throw(error).value).toEqual(put(appFetchFiveDayByGeoFailureAction(error)))
    })
  })

  describe('watchFiveDayByGeo', () => {
    it('should call weatherFetchFiveDayByGeoFlow', () => {
      const gen = watchFiveDayByGeo()
      expect(gen.next().value).toEqual(takeLatest(APP_FETCH_FIVE_DAY_GEO, weatherFetchFiveDayByGeoFlow))
    })
  })
})