# lighterhtml-plus

This is exactly [lighterhtml](https://github.com/WebReflection/lighterhtml#readme), plus:

  * `onconnected` callback, as in [hyperHTML](https://github.com/WebReflection/hyperHTML#hyperhtml), to have Custom Elements like callbacks
  * `ondisconnected` callback, as in [hyperHTML](https://github.com/WebReflection/hyperHTML#hyperhtml), to have counter events when nodes get disconnected
  * `onattributechanged` callback, as in [wickedElements](https://github.com/WebReflection/wicked-elements#wickedelements), to have attributes change notifications, Custom Elements like


```js
import {render, html} from 'lighterhtml-plus';

render(document.body, html`
  <div
    onconnected=${event => console.log('connected')}
    ondisconnected=${event => console.log('disconnected')}
    onattributechanged=${({
      attributeName,
      oldValue,
      newValue
    }) => console.log('changed')}
  >
    lighterhtml-plus 🎉
  </div>
`);
```
