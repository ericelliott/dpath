'use strict';
/**
 * Sugar for myString.split('.');
 * Use: dp('a.b.c'); // => ['a','b','c']
 *
 * @param  {[string]} input     String input
 * @param  {[string]} [delimiter] Split delimiter
 * @return {[Array]}
 */
module.exports = function dp (input, delimiter) {
  var d = delimiter || '.';
  return input.split(d);
};
