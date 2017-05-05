import React from 'react'
import ReactDOM from 'react-dom'
//import { createStore } from 'redux'
import { Provider } from 'react-redux'
//import CommentApp from './containers/CommentApp'
//import commentsReducer from './reducers'
import store from './store'
import route from './router'
import './index.css'

//const store = createStore(commentsReducer)

ReactDOM.render(
  <Provider store={store}>
    {route}
  </Provider>,
  document.getElementById('root')
);