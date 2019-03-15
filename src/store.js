import {
  createStore,
  applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { AppReducer } from './app'
import { AppSaga } from './app'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  AppReducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(AppSaga)

export default store