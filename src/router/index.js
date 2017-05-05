import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, browserHistory, hashHistory } from 'react-router'

import CommentApp from '../containers/CommentApp'
import About from '../containers/About'

class roots extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        )
    }
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory

// const chooseProducts = (location, cb) => {
//     require.ensure([], require => {
//         cb(null, require('../Component/chooseProducts').default)
//     },'chooseProducts')
// }

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={roots}>
            <IndexRoute component={CommentApp} />
            <Route path="index" component={CommentApp} />
            <Route path="about" component={About} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
)

export default RouteConfig