import { put, takeLatest, fork, all, call } from 'redux-saga/effects'
import { fetchWeatherByGeo, fetchWeatherByCity } from './api'
import {
  appFetchWeatherByCitySuccessAction,
  appFetchWeatherByCityFailureAction,
  appFetchWeatherByGeoSuccessAction,
  appFetchWeatherByGeoFailureAction
} from './actions'
import { APP_FETCH_WEATHER_CITY, APP_FETCH_WEATHER_GEO } from './constants'

export function* weatherFetchByCityFlow({ payload }) {
  try {
    const response = yield call(fetchWeatherByCity, payload)
    yield put(appFetchWeatherByCitySuccessAction(response))
  } catch (error) {
    yield put(appFetchWeatherByCityFailureAction(error))
  }
}

export function* weatherFetchByGeoFlow({ payload }) {
  try {
    const response = yield call(fetchWeatherByGeo, payload)
    console.log('geo response', response)
    yield put(appFetchWeatherByGeoSuccessAction(response))
  } catch (error) {
    console.log('error', error)
    yield put(appFetchWeatherByGeoFailureAction(error))
  }
}

export function* watchWeatherByCity() {
  yield takeLatest(APP_FETCH_WEATHER_CITY, weatherFetchByCityFlow)
}

export function* watchWeatherByGeo() {
  yield takeLatest(APP_FETCH_WEATHER_GEO, weatherFetchByGeoFlow)
}

export default function* () {
  yield all([
    fork(watchWeatherByCity),
    fork(watchWeatherByGeo)
  ])
}