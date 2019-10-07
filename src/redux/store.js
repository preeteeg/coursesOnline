import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer/root.reducers";
//this will warn us if we accidentally mutate redux state

import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
//redux middleware is a way to enhance redux's behavior

const storeConfig = initialState => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(reduxImmutableStateInvariant()))
  );
};

export default storeConfig;
