import ACTIONS from '../constants/ActionNames';
// import { combineReducers } from 'redux';
// import presetsReducer from './presetsReducer';
// import grammarReducer from './grammarReducer';
// import outputReducer from './outputReducer';

// const reducers = combineReducers({
//   presets: presetsReducer,
//   grammar: grammarReducer,
//   output: outputReducer
// });

// reducer should be pure, i.e. not mutate state or action
const reducer = (state = {presets: {selectedPreset: 4}, grammar: {productions: ''}, output: {numIterations: 2, output: ''}} , action) => {
  switch (action.type) {
    case ACTIONS.presetSelected: {
    	// need to change presets, productions and output
      let defaultIterations = 2;
      let output = 'DEFAULTOUTPUT ' + defaultIterations;
      let productions = action.payload.productions;
      let selectedPreset = action.payload.selectedPreset;
      let overwrite = {presets: {selectedPreset}, grammar: {productions}, output: {numIterations: defaultIterations, output}};
      return Object.assign({}, state, overwrite);
    }
    case ACTIONS.productionsChanged: {
    	// need to change productions and output
      let productions = action.payload;
      let output = 'PRODUCTIONSCHANGED ' + Math.random();
      return Object.assign({}, state, {grammar: {productions}, output: {output}});
    }
    case ACTIONS.numIterationsChanged: {
    	// need to change output
      let numIterations = action.payload;
      let output = numIterations + '';
      return Object.assign({}, state, {output: {numIterations, output}});
    }
  }
  return state;
};

export default reducer;
