import { put, takeLatest, fork, all, call } from 'redux-saga/effects'
import {
  fetchWeatherByGeo,
  fetchFiveDayByGeo
} from './api'
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

export function* weatherFetchByGeoFlow({ payload }) {
  try {
    const response = yield call(fetchWeatherByGeo, payload)
    yield put(appFetchWeatherByGeoSuccessAction(response))
  } catch (error) {
    yield put(appFetchWeatherByGeoFailureAction(error))
  }
}

export function* weatherFetchFiveDayByGeoFlow({ payload }) {
  try {
    const response = yield call(fetchFiveDayByGeo, payload)
    yield put(appFetchFiveDayByGeoSuccessAction(response))
  } catch (error) {
    yield put(appFetchFiveDayByGeoFailureAction(error))
  }
}

export function* watchWeatherByGeo() {
  yield takeLatest(APP_FETCH_WEATHER_GEO, weatherFetchByGeoFlow)
}

export function* watchFiveDayByGeo() {
  yield takeLatest(APP_FETCH_FIVE_DAY_GEO, weatherFetchFiveDayByGeoFlow)
}


export default function* () {
  yield all([
    fork(watchWeatherByGeo),
    fork(watchFiveDayByGeo)
  ])
}