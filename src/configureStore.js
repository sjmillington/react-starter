import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

export default function configureStore(initialState = {}){
  let composeEnhancers = compose;

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {

    console.log('instantiating dev tools')

    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});

  }

  const middlewares = []; //

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    reducer,
    composeEnhancers(...enhancers)
  );

  return store;
}