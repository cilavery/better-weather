import { put, takeLatest, all, call, fork } from 'redux-saga/effects'
import { fetchWeatherByGeo, fetchWeatherByCity } from './api'
import { appFetchWeatherByCitySuccessAction, appFetchWeatherByCityFailureAction, appFetchWeatherByGeoSuccessAction, appFetchWeatherByGeoFailureAction } from './actions'
import { APP_FETCH_WEATHER_CITY, APP_FETCH_WEATHER_CITY_SUCCESS, APP_FETCH_WEATHER_CITY_FAILURE } from './constants'

export function* weatherFetchByCityFlow(payload) {
  try {
    const response = yield call(fetchWeatherByCity, payload)
    yield put(appFetchWeatherByCitySuccessAction(response))
  } catch (error) {
    yield put(appFetchWeatherByCityFailureAction(error))
  }
}

export function* weatherFetchByGeoFlow(payload) {
  try {
    const response = yield call(fetchWeatherByGeo, payload)
    yield put(appFetchWeatherByGeoSuccessAction(response))
  } catch (error) {

  }
}

export function* watchWeatherByCityFetch() {
  yield takeLatest(APP_FETCH_WEATHER_CITY, weatherFetchByCityFlow)
}

export default function* appSaga() {
  yield all([
    fork.watchWeatherByCityFetch()
  ])
}