import { put, takeLatest, fork, all, call } from 'redux-saga/effects'
import {
  fetchWeather,
  fetchFiveDay
} from './api'
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

export function* weatherFetchFlow({ payload }) {
  try {
    const response = yield call(fetchWeather, payload)
    yield put(appFetchWeatherSuccessAction(response))
  } catch (error) {
    yield put(appFetchWeatherFailureAction(error))
  }
}

export function* weatherFetchFiveDayFlow({ payload }) {
  try {
    const response = yield call(fetchFiveDay, payload)
    yield put(appFetchFiveDaySuccessAction(response))
  } catch (error) {
    yield put(appFetchFiveDayFailureAction(error))
  }
}

export function* watchWeather() {
  yield takeLatest(APP_FETCH_WEATHER, weatherFetchFlow)
}

export function* watchFiveDay() {
  yield takeLatest(APP_FETCH_FIVE_DAY, weatherFetchFiveDayFlow)
}


export default function* () {
  yield all([
    fork(watchWeather),
    fork(watchFiveDay)
  ])
}