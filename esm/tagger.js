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
import createContent from '@ungap/create-content';
import domdiff from 'domdiff';
import domtagger from 'domtagger';
import hyperStyle from 'hyperhtml-style';
import {aria, attribute, data, ref, setter} from 'uhandlers';
import {diffable} from 'uwire';

import {isArray, slice} from 'uarray';

// special attributes helpers
const hyperProperty = (node, name) => {
  let oldValue;
  return newValue => {
    if (oldValue !== newValue) {
      oldValue = newValue;
      if (node[name] !== newValue) {
        if (newValue == null) {
          // cleanup before dropping the attribute to fix IE/Edge gotcha
          node[name] = '';
          node.removeAttribute(name);
        } else
          node[name] = newValue;
      }
    }
  };
};

// list of attributes that should not be directly assigned
const readOnly = /^(?:form|list)$/i;

// simplifies text node creation
const text = (node, text) => node.ownerDocument.createTextNode(text);

export function Tagger(type) {
  this.type = type;
  return domtagger(this);
};

Tagger.prototype = {

  // there are four kind of attributes, and related behavior:
  //  * events, with a name starting with `on`, to add/remove event listeners
  //  * special, with a name present in their inherited prototype, accessed directly
  //  * regular, accessed through get/setAttribute standard DOM methods
  //  * style, the only regular attribute that also accepts an object as value
  //    so that you can style=${{width: 120}}. In this case, the behavior has been
  //    fully inspired by Preact library and its simplicity.
  attribute(node, name, original) {
    const isSVG = this.type === 'svg';
    switch (name) {
      case 'class':
        if (isSVG)
          return attribute(node, name, isSVG);
        name = 'className';
      case 'props':
        return setter(node, name);
      case 'aria':
        return aria(node);
      case 'data':
        return data(node);
      case 'style':
        return hyperStyle(node, original, isSVG);
      case 'ref':
        return ref(node);
      default:
        if (name.slice(0, 1) === '.')
          return setter(node, name.slice(1));
        if (name.slice(0, 2) === 'on')
          return event(node, name);
        if (name in node && !(isSVG || readOnly.test(name)))
          return hyperProperty(node, name);
        return attribute(node, name, isSVG);

    }
  },

  // in a hyper(node)`<div>${content}</div>` case
  // everything could happen:
  //  * it's a JS primitive, stored as text
  //  * it's null or undefined, the node should be cleaned
  //  * it's a promise, update the content once resolved
  //  * it's an explicit intent, perform the desired operation
  //  * it's an Array, resolve all values if Promises and/or
  //    update the node with the resulting list of content
  any(node, childNodes) {
    const diffOptions = {node: diffable, before: node};
    const {type} = this;
    let fastPath = false;
    let oldValue;
    const anyContent = value => {
      switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
          if (fastPath) {
            if (oldValue !== value) {
              oldValue = value;
              childNodes[0].textContent = value;
            }
          } else {
            fastPath = true;
            oldValue = value;
            childNodes = domdiff(
              node.parentNode,
              childNodes,
              [text(node, value)],
              diffOptions
            );
          }
          break;
        case 'function':
          anyContent(value(node));
          break;
        case 'object':
        case 'undefined':
          if (value == null) {
            fastPath = false;
            childNodes = domdiff(
              node.parentNode,
              childNodes,
              [],
              diffOptions
            );
            break;
          }
        default:
          fastPath = false;
          oldValue = value;
          if (isArray(value)) {
            if (value.length === 0) {
              if (childNodes.length) {
                childNodes = domdiff(
                  node.parentNode,
                  childNodes,
                  [],
                  diffOptions
                );
              }
            } else {
              switch (typeof value[0]) {
                case 'string':
                case 'number':
                case 'boolean':
                  anyContent(String(value));
                  break;
                case 'function':
                  anyContent(value.map(invoke, node));
                  break;
                case 'object':
                  if (isArray(value[0])) {
                    value = value.concat.apply([], value);
                  }
                default:
                  childNodes = domdiff(
                    node.parentNode,
                    childNodes,
                    value,
                    diffOptions
                  );
                  break;
              }
            }
          } else if ('ELEMENT_NODE' in value) {
            childNodes = domdiff(
              node.parentNode,
              childNodes,
              value.nodeType === 11 ?
                slice.call(value.childNodes) :
                [value],
              diffOptions
            );
          } else if ('text' in value) {
            anyContent(String(value.text));
          } else if ('any' in value) {
            anyContent(value.any);
          } else if ('html' in value) {
            childNodes = domdiff(
              node.parentNode,
              childNodes,
              slice.call(
                createContent(
                  [].concat(value.html).join(''),
                  type
                ).childNodes
              ),
              diffOptions
            );
          } else if ('length' in value) {
            anyContent(slice.call(value));
          }
          break;
      }
    };
    return anyContent;
  },

  // style or textareas don't accept HTML as content
  // it's pointless to transform or analyze anything
  // different from text there but it's worth checking
  // for possible defined intents.
  text(node) {
    let oldValue;
    const textContent = value => {
      if (oldValue !== value) {
        oldValue = value;
        const type = typeof value;
        if (type === 'object' && value) {
          if ('text' in value) {
            textContent(String(value.text));
          } else if ('any' in value) {
            textContent(value.any);
          } else if ('html' in value) {
            textContent([].concat(value.html).join(''));
          } else if ('length' in value) {
            textContent(slice.call(value).join(''));
          }
        } else if (type === 'function') {
          textContent(value(node));
        } else {
          node.textContent = value == null ? '' : value;
        }
      }
    };
    return textContent;
  }
};

function invoke(callback) {
  return callback(this);
}
