import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers'
import { Provider } from 'react-redux';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './index.css';
import { Home, Login, NotFound } from 'pages'

import * as serviceWorker from './serviceWorker';

// 通过环境判断是否要使用redux devtools extension 工具
const store = process.env.NODE_ENV === 'production' ? 
    (
        createStore(
            reducers
    )) : 
    (
        createStore(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {}
        )
    )

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/login' component={Login}/>
                <Route path='/' component={Home} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
