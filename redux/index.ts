import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middlewares = [thunk];
let storeEnhancers = compose(applyMiddleware(...middlewares));

export function configureStore(initialStore = {}) {
  const store = createStore(rootReducer, initialStore, storeEnhancers);

  return store;
}

export let store = configureStore();
