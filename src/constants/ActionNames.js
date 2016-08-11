class ActionNameError extends Error {
  constructor (m) {
    super(m);
    this.name = 'ActionNameError';
  }
}

let target = {
  presetSelected: 'PRESET_SELECTED',
  productionsChanged: 'PRODUCTIONS_CHANGED'
};
let handler = {
  get: (target, key) => {
    if (target.hasOwnProperty(key)) return target[key];
    else throw new ActionNameError(`Fired a wrong actionname: ${key}. Available Actions: ${Object.keys(target)}`);
  }
};
const proxy = new Proxy(target, handler);
export default proxy;
