import React from 'react';
import ReactDOM from 'react-dom';

// Adding Redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';

// Middlewares
import promiseMiddleware from 'redux-promise';
import thunkMiddleware from 'redux-thunk';

// App Store
import reducers from 'reducers';

// The Main App Container
import App from 'components/App';

import 'styles/style.scss';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, thunkMiddleware)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>,
  document.getElementById('root')
);
