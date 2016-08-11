import ACTIONS from '../constants/ActionNames';

const presetsReducer = (state = {selectedPreset: 0} , action) => {
  if (action.type === ACTIONS.presetSelected) {
    return Object.assign({}, state, {selectedPreset: action.payload});
  }
  return state;
};

export default presetsReducer;
