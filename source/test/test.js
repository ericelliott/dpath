import test from 'tape';
import Immutable from 'immutable';

import { dp, get, set } from '../index';

test('dp', assert => {
  const msg = 'should take a dotpath string and convert it to an array';
  const path = 'a.b.c';
  const actual = dp(path);
  const expected = ['a', 'b', 'c'];

  assert.same(actual, expected, msg);
  assert.end();
});

test('get', assert => {
  const msg = 'should get a value from an immutable object';
  const i = Immutable.fromJS({
    a: {
      b: { c: 'c' }
    }
  });
  const actual = get('a.b.c', i);
  const expected = 'c';

  assert.equal(actual, expected, msg);
  assert.end();
});

test('set', assert => {
  const msg = 'should set a value in an immutable object';
  const expected = 23;

  const i = Immutable.fromJS({
    a: {
      b: { c: 'c' }
    }
  });
  const newState = set('a.b.c', i, 23);
  const actual = get('a.b.c', newState);

  assert.equal(actual, expected, msg);
  assert.end();
});
