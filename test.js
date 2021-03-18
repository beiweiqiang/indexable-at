'use strict';

const assert = require('assert');
require('.');

const arr = [1, 2, 3, 4, 5, 6];
assert.strictEqual(arr.at(1), 2);
assert.strictEqual(arr.at(-1), 6);
assert.strictEqual(arr.at(-3), 4);
assert.strictEqual(arr.at(11), undefined);

const str = 'abcde';
assert.strictEqual(str.at(1), 'b');
assert.strictEqual(str.at(-1), 'e');
assert.strictEqual(str.at(-3), 'c');
assert.strictEqual(str.at(-13), undefined);
