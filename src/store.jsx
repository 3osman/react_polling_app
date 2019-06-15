import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import api from './polling_app_api';
import PollingAppReducer from 'polling_app_reducer';

const configureStore = initialState => {
  const enhancersComposition = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    })
    : compose;
  const rootReducers = combineReducers({
    pollingApp: PollingAppReducers
  })
  const enhancer = enhancersComposition(applyMiddleware(thunk.withExtraArgument({ api })));
  return createStore(rootReducers, initialState, enhancer);
}

export default configureStore;
