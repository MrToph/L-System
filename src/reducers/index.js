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
const reducer = (state = {snackbar: {text: ''}, presets: {selectedPreset: 5}, grammar: {productions: '', startAngle: 0, turnAngle: 0}, output: {numIterations: 2, text: ''}} , action) => {
  switch (action.type) {
    case ACTIONS.presetSelected: {  // need to change presets, productions and output
      let defaultIterations = 2;
      let selectedPreset = action.payload.selectedPreset;
      let productions = action.payload.productions;
      let startAngle = action.payload.startAngle;
      let turnAngle = action.payload.turnAngle;
      // pass it to LSystem
      let error = parse(productions);
      let text = getOutput(defaultIterations);
      // build new state
      let overwrite = {snackbar: {text: error}, presets: {selectedPreset}, grammar: {productions, startAngle, turnAngle}, output: {numIterations: defaultIterations, text}};
      return Object.assign({}, state, overwrite);
    }
    case ACTIONS.productionsChanged: {  // need to change productions(text) and output
      let productions = action.payload;
      // pass it to LSystem
      let error = parse(productions);
      let text = getOutput(state.output.numIterations);
      return Object.assign({}, state, {snackbar: {text: error}, grammar: {...state.grammar, productions}, output: {...state.output, text}}); // have to do a 'deep object merge' for output, otherwise output.numIterations would be removed
    }
    case ACTIONS.anglesChanged: { // need to change productions(startAngle,turnAngle)
      let startAngle = action.payload.startAngle;
      let turnAngle = action.payload.turnAngle;
      var error = '';
      if (startAngle === '' || turnAngle === '' || isNaN(startAngle) || isNaN(turnAngle)) {
        error = `ParseError: Angle must be a number: ${startAngle}, ${turnAngle}`;
      }
      // LSystemRender.jsx listens to grammar.startAngle/turnAngle changes
      return Object.assign({}, state, {snackbar: {text: error}, grammar: {...state.grammar, startAngle, turnAngle}});
    }
    case ACTIONS.numIterationsChanged: {  // need to change output
      let numIterations = action.payload;
      let text = getOutput(numIterations);
      return Object.assign({}, state, {output: {numIterations, text}});
    }
  }
  return state;
};

export default reducer;
