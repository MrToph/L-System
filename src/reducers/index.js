import ACTIONS from '../constants/ActionNames';
import LSystem from '../LSystem/';

const LSys = new LSystem();

const parse = productions => {
  try {
    LSys.parseProductions(productions);
    return '';
  } catch (error) {
    return error.message;
  }
};

const getOutput = numIterations => {
  let lines = LSys.iterate(numIterations);
  return lines;
};
// reducer should be pure, i.e. not mutate state or action
const reducer = (state = {snackbar: {text: ''}, presets: {selectedPreset: 3}, grammar: {productions: ''}, output: {numIterations: 2, text: ''}} , action) => {
  switch (action.type) {
    case ACTIONS.presetSelected: {
      // need to change presets, productions and output
      let defaultIterations = 1;
      let selectedPreset = action.payload.selectedPreset;
      let productions = action.payload.productions;
      // pass it to LSystem
      let error = parse(productions);
      let text = getOutput(defaultIterations);
      // build new state
      let overwrite = {snackbar: {text: error}, presets: {selectedPreset}, grammar: {productions}, output: {numIterations: defaultIterations, text}};
      return Object.assign({}, state, overwrite);
    }
    case ACTIONS.productionsChanged: {
      // need to change productions and output
      let productions = action.payload;
      // pass it to LSystem
      let error = parse(productions);
      let text = getOutput(state.output.numIterations);
      return Object.assign({}, state, {snackbar: {text: error}, grammar: {productions}, output: {...state.output, text}}); // have to do a 'deep object merge' for output, otherwise output.numIterations would be removed
    }
    case ACTIONS.numIterationsChanged: {
      // need to change output
      let numIterations = action.payload;
      let text = getOutput(numIterations);
      return Object.assign({}, state, {output: {numIterations, text}});
    }
  }
  return state;
};

export default reducer;
