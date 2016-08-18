# Dot Path

Sugar for `myString.split('.');` Use: `dp('a.b.c'); // => ['a','b','c']`

## Install

```
$ npm install --save dpath
```

## Use

```
import dp from 'dpath';
const arrPath = dp('a.b.c'); // => ['a','b','c']

// optionally specify a delimiter:
const arr2 = dp('a,b,c', ','); // => ['a','b','c']
```

## Use with Immutable.js

```
import I from `immutable`;
import dp from 'dpath';

let map = I.Map().setIn(dp('a.b.c'), 'val');
map.toJS(); // => {a:{b:{c:'val'}}}
```
