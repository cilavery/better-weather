import {
  APP_FETCH_WEATHER_GEO,
  APP_FETCH_WEATHER_GEO_SUCCESS,
  APP_FETCH_WEATHER_GEO_FAILURE,
  APP_FETCH_WEATHER_CITY,
  APP_FETCH_WEATHER_CITY_SUCCESS,
  APP_FETCH_WEATHER_CITY_FAILURE
} from './constants'

const initialState = {
  currentWeather: {},
  isFetching: false,
  fetchError: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_FETCH_WEATHER_GEO:
      return {
        ...state,
        isFetching: true,
        fetchError: null
      }
    case APP_FETCH_WEATHER_GEO_SUCCESS:
      return {
        ...state,
        currentWeather: {
          ...state.currentWeather,
          ...action.response
        },
        isFetching: false,
        fetchError: null
      }
    case APP_FETCH_WEATHER_GEO_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error.toString()
      }
    case APP_FETCH_WEATHER_CITY:
      return {
        ...state,
        isFetching: true,
        fetchError: null
      }
    case APP_FETCH_WEATHER_CITY_SUCCESS:
      return {
        ...state,
        currentWeather: {
          ...state.currentWeather,
          ...action.response
        },
        isFetching: false,
        fetchError: null
      }
    case APP_FETCH_WEATHER_CITY_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetchError: action.error.toString()
      }
    default:
      return state
  }
}