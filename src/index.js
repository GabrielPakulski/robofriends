import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider, connect } from 'react-redux';
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'; 
import { searchRobots, requestRobots } from './reducers';

const rootReducer = combineReducers({searchRobots, requestRobots})
const logger = createLogger();
const store = legacy_createStore(rootReducer, 
    applyMiddleware(thunkMiddleware,logger))

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>);

registerServiceWorker();
