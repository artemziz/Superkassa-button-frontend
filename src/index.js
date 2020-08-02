import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import {rootReducer} from './redux/reducers/rootReducer';
import {start, Middleware} from './redux/middleware/socketMiddleware';

import App from './App';

const store = createStore(rootReducer, compose(
    applyMiddleware(
        Middleware,
    ),
    // disable for build
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
));

start(store);

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);

