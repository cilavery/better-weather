import {
  APP_FETCH_WEATHER_GEO,
  APP_FETCH_WEATHER_GEO_SUCCESS,
  APP_FETCH_WEATHER_GEO_FAILURE,
  APP_FETCH_WEATHER_CITY,
  APP_FETCH_WEATHER_CITY_SUCCESS,
  APP_FETCH_WEATHER_CITY_FAILURE
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

export const appFetchWeatherByCityAction = payload => {
  return {
    type: APP_FETCH_WEATHER_CITY,
    payload
  }
}

export const appFetchWeatherByCitySuccessAction = response => {
  return {
    type: APP_FETCH_WEATHER_CITY_SUCCESS,
    response
  }
}

export const appFetchWeatherByCityFailureAction = error => {
  return {
    type: APP_FETCH_WEATHER_CITY_FAILURE,
    error
  }
}