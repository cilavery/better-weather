import { call, put, takeLatest } from 'redux-saga/effects'
import {
  watchWeather,
  weatherFetchFlow,
  weatherFetchFiveDayFlow,
  watchFiveDay
} from './sagas'
import {
  appFetchWeatherSuccessAction,
  appFetchWeatherFailureAction,
  appFetchFiveDaySuccessAction,
  appFetchFiveDayFailureAction
} from './actions'
import {
  APP_FETCH_WEATHER,
  APP_FETCH_FIVE_DAY
} from './constants'
import {
  fetchWeather,
  fetchFiveDay
} from './api'

jest.mock('./api')

describe('Current Weather Saga', () => {
  describe('weatherFetchFlow', () => {
    let payload
    beforeEach(() => {
      payload = {}
    })
    it('should call fetchWeather api', () => {
      const gen = weatherFetchFlow({ payload })
      expect(gen.next().value).toEqual(call(fetchWeather, payload))
    })

    it('should put appFetchWeatherSuccessAction', () => {
      const response = {}
      const gen = weatherFetchFlow({ payload })
      gen.next()
      expect(gen.next(response).value).toEqual(put(appFetchWeatherSuccessAction(response)))
    })

    it('should put appFetchWeatherFailure Action', () => {
      const error = {}
      const gen = weatherFetchFlow({ payload })
      gen.next()
      expect(gen.throw(error).value).toEqual(put(appFetchWeatherFailureAction(error)))
    })
  })

  describe('watchWeather', () => {
    it('should call weatherFetchFlow', () => {
      const gen = watchWeather()
      expect(gen.next().value).toEqual(takeLatest(APP_FETCH_WEATHER, weatherFetchFlow))
    })
  })
})

describe('5-Day Forecast Saga', () => {
  describe('weatherFetchFiveDayFlow', () => {
    let payload
    beforeEach(() => {
      payload = {}
    })
    it('should call fetchFiveDay api', () => {
      const gen = weatherFetchFiveDayFlow({ payload })
      expect(gen.next().value).toEqual(call(fetchFiveDay, payload))
    })

    it('should put appFetchFiveDaySuccessAction', () => {
      const response = {}
      const gen = weatherFetchFiveDayFlow({ payload })
      gen.next()
      expect(gen.next(response).value).toEqual(put(appFetchFiveDaySuccessAction(response)))
    })

    it('should put appFetchFiveDayFailure Action', () => {
      const error = {}
      const gen = weatherFetchFiveDayFlow({ payload })
      gen.next()
      expect(gen.throw(error).value).toEqual(put(appFetchFiveDayFailureAction(error)))
    })
  })

  describe('watchFiveDay', () => {
    it('should call weatherFetchFiveDayFlow', () => {
      const gen = watchFiveDay()
      expect(gen.next().value).toEqual(takeLatest(APP_FETCH_FIVE_DAY, weatherFetchFiveDayFlow))
    })
  })
})