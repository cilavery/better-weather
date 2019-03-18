import {
  APP_FETCH_WEATHER_GEO,
  APP_FETCH_WEATHER_GEO_SUCCESS,
  APP_FETCH_WEATHER_GEO_FAILURE,
  APP_FETCH_FIVE_DAY_GEO,
  APP_FETCH_FIVE_DAY_GEO_SUCCESS,
  APP_FETCH_FIVE_DAY_GEO_FAILURE
} from './constants'

export const appFetchWeatherByGeoAction = payload => {
  return {
    type: APP_FETCH_WEATHER_GEO,
    payload
  }
}

export const appFetchWeatherByGeoSuccessAction = response => {
  return {
    type: APP_FETCH_WEATHER_GEO_SUCCESS,
    response
  }
}

export const appFetchWeatherByGeoFailureAction = error => {
  return {
    type: APP_FETCH_WEATHER_GEO_FAILURE,
    error
  }
}

export const appFetchFiveDayByGeoAction = payload => {
  return {
    type: APP_FETCH_FIVE_DAY_GEO,
    payload
  }
}

export const appFetchFiveDayByGeoSuccessAction = response => {
  return {
    type: APP_FETCH_FIVE_DAY_GEO_SUCCESS,
    response
  }
}

export const appFetchFiveDayByGeoFailureAction = error => {
  return {
    type: APP_FETCH_FIVE_DAY_GEO_FAILURE,
    error
  }
}