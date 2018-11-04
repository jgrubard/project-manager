import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import users from './users';

const middleware = applyMiddleware(thunk, logger);
const reducers = combineReducers({ users });

const store = createStore(reducers, middleware);

export default store;

export * from './users';
export * from './user';