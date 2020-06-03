import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import reducer from 'reducers';

function configureStore(initialSate = {}) {
  const store = createStore(reducer, initialSate, devToolsEnhancer({}));
  return store;
}

export default configureStore;
