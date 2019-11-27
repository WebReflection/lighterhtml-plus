import WeakMap from '@ungap/weakmap';

export default (typeof WeakSet == typeof add ?
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
