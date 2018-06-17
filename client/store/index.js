import { createStore, combineReducers, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';
import allCourts from './allCourts';

const reducer = combineReducers({ allCourts });

const store = createStore(
  reducer,
  applyMiddleware(loggingMiddleware, thunkMiddleware)
);

export default store;
