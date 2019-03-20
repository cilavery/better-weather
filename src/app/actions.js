import {
  APP_FETCH_WEATHER,
  APP_FETCH_WEATHER_SUCCESS,
  APP_FETCH_WEATHER_FAILURE,
  APP_FETCH_FIVE_DAY,
  APP_FETCH_FIVE_DAY_SUCCESS,
  APP_FETCH_FIVE_DAY_FAILURE,
  APP_STORE_UPDATE_UNIT
} from './constants'

export const appFetchWeatherAction = payload => {
  return {
    type: APP_FETCH_WEATHER,
    payload
  }
}

export const appFetchWeatherSuccessAction = response => {
  return {
    type: APP_FETCH_WEATHER_SUCCESS,
    response
  }
}

export const appFetchWeatherFailureAction = error => {
  return {
    type: APP_FETCH_WEATHER_FAILURE,
    error
  }
}

export const appFetchFiveDayAction = payload => {
  return {
    type: APP_FETCH_FIVE_DAY,
    payload
  }
}

export const appFetchFiveDaySuccessAction = response => {
  return {
    type: APP_FETCH_FIVE_DAY_SUCCESS,
    response
  }
}

export const appFetchFiveDayFailureAction = error => {
  return {
    type: APP_FETCH_FIVE_DAY_FAILURE,
    error
  }
}

export const appStoreUpdateUnit = payload => {
  return {
    type: APP_STORE_UPDATE_UNIT,
    payload
  }
}