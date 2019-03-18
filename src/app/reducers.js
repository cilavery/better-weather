import {
  APP_FETCH_WEATHER_GEO,
  APP_FETCH_WEATHER_GEO_SUCCESS,
  APP_FETCH_WEATHER_GEO_FAILURE,
  APP_FETCH_FIVE_DAY_GEO,
  APP_FETCH_FIVE_DAY_GEO_SUCCESS,
  APP_FETCH_FIVE_DAY_GEO_FAILURE
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
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case APP_FETCH_WEATHER_GEO:
      return {
        ...state,
        current: {
          ...state.current,
          isFetching: true,
          fetchError: null
        }
      }
    case APP_FETCH_WEATHER_GEO_SUCCESS:
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
    case APP_FETCH_WEATHER_GEO_FAILURE:
      return {
        ...state,
        current: {
          ...state.current,
          isFetching: false,
          fetchError: action.error.toString()
        }
      }
    case APP_FETCH_FIVE_DAY_GEO:
      return {
        ...state,
        fiveDay: {
          ...state.fiveDay,
          isFetching: true,
          fetchError: null
        }
      }
    case APP_FETCH_FIVE_DAY_GEO_SUCCESS:
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
    case APP_FETCH_FIVE_DAY_GEO_FAILURE:
      return {
        ...state,
        fiveDay: {
          ...state.fiveDay,
          isFetching: false,
          fetchError: action.error.toString()
        }
      }
    default:
      return state
  }
}