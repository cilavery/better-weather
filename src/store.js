import {
  createStore,
  applyMiddleware,
  compose
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { AppReducer } from './app'
import { AppSagas } from './app'

const sagaMiddleware = createSagaMiddleware()

// const composeEnhancers = process.env.BUILD === 'production' ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

const store = createStore(
  AppReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(AppSagas)

export default store