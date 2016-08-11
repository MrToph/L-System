import ACTIONS from '../constants/ActionNames';

const grammarReducer = (state = {alphabet: 'A,B,C', productions: ''} , action) => {
  // console.log('grammarReducer', state)
  if (action.type === ACTIONS.productionsChanged) {
    // process productions
    let productions = action.payload;
    let alphabet = productions.slice(0, productions.indexOf(' '));
    return Object.assign({}, state, {productions, alphabet});
  }
  return state;
};

export default grammarReducer;
