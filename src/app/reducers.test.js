import reducer from './reducers'
import * as types from './constants'

describe('App reducer', () => {
  let initialState
  beforeEach(() => {
    initialState = {
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
      unit: 'imperial'
    }
  })

  describe('APP_FETCH_WEATHER_GEO', () => {
    it('should return initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
    it('should handle APP_FETCH_WEATHER_GEO', () => {
      const action = {
        type: types.APP_FETCH_WEATHER_GEO
      }
      expect(reducer(initialState, action)).toEqual({
        current: {
          weather: {},
          isFetching: true,
          fetchError: null
        },
        fiveDay: {
          weather: {},
          isFetching: false,
          fetchError: null
        },
        unit: 'imperial'
      })
    })
    it('should handle APP_FETCH_WEATHER_GEO_SUCCESS', () => {
      const action = {
        type: types.APP_FETCH_WEATHER_GEO_SUCCESS,
        response: { 'temp': '72' }
      }
      expect(reducer(initialState, action)).toEqual({
        current: {
          weather: { 'temp': '72' },
          isFetching: false,
          fetchError: null
        },
        fiveDay: {
          weather: {},
          isFetching: false,
          fetchError: null
        },
        unit: 'imperial'
      })
    })
    it('should handle APP_FETCH_WEATHER_GEO_FAILURE', () => {
      const action = {
        type: types.APP_FETCH_WEATHER_GEO_FAILURE,
        error: 'Something did not work'
      }
      expect(reducer(initialState, action)).toEqual({
        current: {
          weather: {},
          isFetching: false,
          fetchError: 'Something did not work'
        },
        fiveDay: {
          weather: {},
          isFetching: false,
          fetchError: null
        },
        unit: 'imperial'
      })
    })
  })

  describe('APP_FETCH_FIVE_DAY_GEO', () => {
    it('shoould handle APP_FETCH_FIVE_DAY_GEO', () => {
      const action = {
        type: types.APP_FETCH_FIVE_DAY_GEO
      }
      expect(reducer(initialState, action)).toEqual({
        current: {
          weather: {},
          isFetching: false,
          fetchError: null
        },
        fiveDay: {
          weather: {},
          isFetching: true,
          fetchError: null
        },
        unit: 'imperial'
      })
    })

    it('should handle APP_FETCH_FIVE_DAY_GEO_SUCCESS', () => {
      const action = {
        type: types.APP_FETCH_FIVE_DAY_GEO_SUCCESS,
        response: { 0: { 'temp': '75' }, 1: { 'temp': '80' } }
      }
      expect(reducer(initialState, action)).toEqual({
        current: {
          weather: {},
          isFetching: false,
          fetchError: null
        },
        fiveDay: {
          weather: { 0: { 'temp': '75' }, 1: { 'temp': '80' } },
          isFetching: false,
          fetchError: null
        },
        unit: 'imperial'
      })
    })

    it('should handle APP_FETCH_FIVE_DAY_GEO_FAILURE', () => {
      const action = {
        type: types.APP_FETCH_FIVE_DAY_GEO_FAILURE,
        error: 'Something did not work'
      }
      expect(reducer(initialState, action)).toEqual({
        current: {
          weather: {},
          isFetching: false,
          fetchError: null
        },
        fiveDay: {
          weather: {},
          isFetching: false,
          fetchError: 'Something did not work'
        },
        unit: 'imperial'
      })
    })
  })

  describe('APP_STORE_UPDATE_UNIT', () => {
    it('should handle APP_STORE_UPDATE_UNIT', () => {
      const action = {
        type: types.APP_STORE_UPDATE_UNIT,
        payload: { unit: 'metric' }
      }
      expect(reducer(initialState, action)).toEqual({
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
        unit: 'metric'
      })
    })
  })

})


