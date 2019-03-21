import {
  APP_FETCH_WEATHER,
  APP_FETCH_WEATHER_SUCCESS,
  APP_FETCH_WEATHER_FAILURE,
  APP_FETCH_FIVE_DAY,
  APP_FETCH_FIVE_DAY_SUCCESS,
  APP_FETCH_FIVE_DAY_FAILURE,
  APP_STORE_UPDATE_UNIT,
  APP_STORE_LOCATION_ENABLED
} from './constants'

const initialState = {
  current: {
    weather: {},
    isFetching: false,
    fetchError: null
  },
  fiveDay: {
    weather: {},
    isFetching: false,
    fetchError: null
  },
  unit: 'imperial',
  locationEnabled: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_FETCH_WEATHER:
      return {
        ...state,
        current: {
          ...state.current,
          isFetching: true,
          fetchError: null
        }
      }
    case APP_FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        current: {
          ...state.current,
          weather: {
            ...action.response,
          },
          isFetching: false,
          fetchError: null
        }
      }
    case APP_FETCH_WEATHER_FAILURE:
      return {
        ...state,
        current: {
          ...state.current,
          isFetching: false,
          fetchError: action.error.toString()
        }
      }
    case APP_FETCH_FIVE_DAY:
      return {
        ...state,
        fiveDay: {
          ...state.fiveDay,
          isFetching: true,
          fetchError: null
        }
      }
    case APP_FETCH_FIVE_DAY_SUCCESS:
      return {
        ...state,
        fiveDay: {
          ...state.fiveDay,
          weather: {
            ...action.response,
          },
          isFetching: false,
          fetchError: null
        }
      }
    case APP_FETCH_FIVE_DAY_FAILURE:
      return {
        ...state,
        fiveDay: {
          ...state.fiveDay,
          isFetching: false,
          fetchError: action.error.toString()
        }
      }
    case APP_STORE_UPDATE_UNIT:
      return {
        ...state,
        unit: action.payload.unit
      }
    case APP_STORE_LOCATION_ENABLED:
      return {
        ...state,
        locationEnabled: action.payload
      }
    default:
      return state
  }
}