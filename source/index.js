// dp(path: String, delimiter: String) => Array
export const dp = (input, delimiter) => {
  var d = delimiter || '.';
  return input.split(d);
};

export default dp;

// get(path: String, i: Immutable) => value: Any
export const get = (path, i) => i.getIn(dp(path));

// set(path: String, i: Immutable, val: Any) => newState: Immutable
export const set = (path, i, val) => i.setIn(dp(path), val);
