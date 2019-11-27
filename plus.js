// start patch for lighterhtml-plus
import CustomEvent from '@ungap/custom-event';
import WeakMap from '@ungap/weakmap';
import attributechanged from 'attributechanged';
import disconnected from 'disconnected';

const CONNECTED = 'connected';
const DISCONNECTED = 'dis' + CONNECTED;

const WS = (typeof WeakSet == typeof add ?
  WeakSet :
  function () {
    const ws = new WeakMap;
    ws.add = add;
    return ws;
  }
);

const poly = {
  Event: CustomEvent,
  WeakSet: WS
};

const observe = disconnected(poly);
const attribute = attributechanged(poly);

const hyperEvent = (node, name) => {
  let oldValue;
  let type = name.slice(2);
  if (type === CONNECTED || type === DISCONNECTED)
    observe(node);
  else if (type === 'attributechanged')
    attribute(node);
  else if (name.toLowerCase() in node)
    type = type.toLowerCase();
  return newValue => {
    if (oldValue !== newValue) {
      if (oldValue)
        node.removeEventListener(type, oldValue, false);
      oldValue = newValue;
      if (newValue)
        node.addEventListener(type, newValue, false);
    }
  };
};

function add(key) {
  return this.set(key, true);
}
// end patch for lighterhtml-plus
