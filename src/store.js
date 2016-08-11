import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';
import settings from './constants/Settings';

var store;
if (settings.log) {
  let middleWare = applyMiddleware(logger());
  store = createStore(reducers, undefined, middleWare);
} else {
  store = createStore(reducers);
}

export default store;
