import { createStore, combineReducers, applyMiddleware } from 'redux'
import { commentReducer } from '../reducers'
import thunk from 'redux-thunk'

var store = createStore(
    combineReducers({commentReducer}),
    applyMiddleware(thunk)
)

export default store