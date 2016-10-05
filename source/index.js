/**
 * Sugar for myString.split('.');
 */
// dp(path: String, delimiter: String) => Array
var dp = function dp (input, delimiter) {
  var d = delimiter || '.';
  return input.split(d);
};

dp.dp = dp;

// get(path: String, i: Immutable) => value: Any
dp.get = function get (path, i) {
  return i.getIn(dp(path));
};

// set(path: String, i: Immutable, val: Any) => Immutable
dp.set = function set (path, i, val) {
  return i.setIn(dp(path), val);
};

module.exports = dp;
module.exports.default = dp;
