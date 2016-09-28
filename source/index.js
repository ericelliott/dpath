/**
 * Sugar for myString.split('.');
 */
// dp(path: String, delimiter: String) => Array
const dp = (input, delimiter) => {
  var d = delimiter || '.';
  return input.split(d);
};

// get(path: String, i: Immutable) => value: Any
const get = (path, i) => i.getIn(dp(path));

// set(path: String, i: Immutable, val: Any) => Immutable
const set = (path, i, val) => i.setIn(dp(path), val);

module.exports = dp;
module.exports.dp = dp;
module.exports.default = dp;
module.exports.get = get;
module.exports.set = set;
