# Dot Path

FP sugar for immutables, using dot path syntax for deep property access.

## Why?

Immutable.js is great, but the API is a bit awkward -- particularly the array-style path notation. These utilities provide functional programming sugar for working with the immutable.js API.

So instead of `i.setIn(['a', 'b', 'c'], value);` you can do `set('a.b.c', i, value);`.

Seems like a small thing, but with curry, you can do: `const setUserRole = set('user.role', i);` and then later `setUserRole('enterprise');` -- which is great for repeated set calls, such as in Redux actions, for instance.

If you want to use FP pipes (lodash `flow`, etc...) it gets even better. Normally immutables force you out of point-free style, like this:

```js
const pipeline = pipe(
  getImmutable,
  immutable => immutable.getIn('a', 'b', 'c')
  map(doSomethingWithABC)
);
```

With dpath, you can do this, instead, and stay point-free:

```js
const pipeline = pipe(
  getImmutable,
  get('a.b.c')
  map(doSomethingWithABC)
);
```


## Install

```
$ npm install --save dpath
```

## dp(path: String, delimiter: String) => Array

```
import dp from 'dpath';
const arrPath = dp('a.b.c'); // => ['a','b','c']

// optionally specify a delimiter:
const arr2 = dp('a,b,c', ','); // => ['a','b','c']
```

### Use with Immutable.js

```
import I from `immutable`;
import dp from 'dpath';

let map = I.Map().setIn(dp('a.b.c'), 'val');
map.toJS(); // => {a:{b:{c:'val'}}}
```

## get(path: String, i: Immutable) => value: Any

Deep property get for the Immutable.js API.

```js
const i = Immutable.fromJS({
  a: {
    b: { c: 'c' }
  }
});
get('a.b.c', i); // => 'c'
```

## set(path: String, i: Immutable, val: Any) => Immutable

Deep property set for the Immutable.js API.

```js
const i = Immutable.fromJS({
  a: {
    b: { c: 'c' }
  }
});
const newState = set('a.b.c', i, 23);
get('a.b.c', newState); // => 23
```
