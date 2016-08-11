import { combineReducers } from 'redux';
import presetsReducer from './presetsReducer';
import grammarReducer from './grammarReducer';

const reducers = combineReducers({
  presets: presetsReducer,
  grammar: grammarReducer
});

export default reducers;
