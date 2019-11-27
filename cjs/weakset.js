'use strict';
const WeakMap = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('@ungap/weakmap'));

Object.defineProperty(exports, '__esModule', {value: true}).default = (typeof WeakSet == typeof add ?
  WeakSet :
  function () {
    const ws = new WeakMap;
    ws.add = add;
    return ws;
  }
);

function add(key) {
  return this.set(key, true);
}
