(function () {
  var typeArr = [Array, String].concat([
    Int8Array,
    Uint8Array,
    Uint8ClampedArray,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array
  ]);
  for (var i = 0; i < typeArr.length; i++) {
    if (typeof typeArr[i].prototype.at !== 'function') {
      Object.defineProperty(typeArr[i].prototype, 'at', {
        value: at,
        writable: true,
        enumerable: false,
        configurable: true
      });
    }
  }

  var isInteger = Number.isInteger || function(value) {
    return typeof value === 'number' &&
          isFinite(value) &&
          Math.floor(value) === value;
  };

  function at(idx) {
    if (!isInteger(idx)) {
      throw new TypeError('Indexable-at params need integer.');
    }

    if (idx < 0) {
      idx += this.length;
    }

    if (idx < 0 || idx > this.length) return undefined;

    return this[idx];
  }
})();