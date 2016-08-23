import ACTIONS from '../constants/ActionNames';

export function presetSelected (index) {
  return {
    type: ACTIONS.presetSelected,
    payload: index
  };
};

export function productionsChanged (production) {
  return {
    type: ACTIONS.productionsChanged,
    payload: production
  };
};

export function anglesChanged (anglesObj) {
  return {
    type: ACTIONS.anglesChanged,
    payload: anglesObj
  };
};

export function numIterationsChanged (iterations) {
  return {
    type: ACTIONS.numIterationsChanged,
    payload: iterations
  };
};
