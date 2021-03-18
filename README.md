# indexable-at [![NPM version](https://img.shields.io/npm/v/indexable-at.svg?style=flat)](https://www.npmjs.com/package/indexable-at)
polyfill for Array#at https://github.com/tc39/proposal-relative-indexing-method

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save indexable-at
```

## Usage

```js
require('indexable-at');

const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.at(1)); // 2
console.log(arr.at(-1)); // 6

const str = 'abcde';
console.log(str.at(1)); // 'b'
console.log(str.at(-1)); // 'e'
```