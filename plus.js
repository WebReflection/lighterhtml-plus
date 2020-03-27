// start patch for lighterhtml-plus
import CustomEvent from '@ungap/custom-event';
import WeakMap from '@ungap/weakmap';
import attributechanged from 'attributechanged';
import disconnected from 'disconnected';

const CONNECTED = 'connected';
const DISCONNECTED = 'dis' + CONNECTED;

const poly = {
  Event: CustomEvent,
  WeakSet: (typeof WeakSet == typeof add ?
    WeakSet :
    function () {
      const ws = new WeakMap;
      ws.add = add;
      return ws;
    }
  )
};

const observe = disconnected(poly);
const attrChanged = attributechanged(poly);

// substitute of uhandlers event
const event = (node, name) => {
  let oldValue;
  let type = name.slice(2);
  if (type === CONNECTED || type === DISCONNECTED)
    observe(node);
  else if (type === 'attributechanged')
    attrChanged(node);
  else if (!(name in node) && name.toLowerCase() in node)
    type = type.toLowerCase();
  return newValue => {
    const info = isArray(newValue) ? newValue : [newValue, false];
    if (oldValue !== info[0]) {
      if (oldValue)
        node.removeEventListener(type, oldValue, info[1]);
      if (oldValue = info[0])
        node.addEventListener(type, oldValue, info[1]);
    }
  };
};

function add(key) {
  return this.set(key, true);
}
// end patch for lighterhtml-plus
