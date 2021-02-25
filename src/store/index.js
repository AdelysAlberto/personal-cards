/**
 * @desc Dependencies
 */

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reactotron from '../config/reactotronConfig';
/**
 * @desc Reducers
 */
import rootReducer from './rootReducer';
/**
 * @desc Sagas
 */
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();

// Excluding the serializable state check middleware. We will remove these when
// adding the error handling
const customizedDefaultMiddleware = getDefaultMiddleware({
  serializableCheck: false,
  immutableCheck: false,
});

const middlewares = [];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
  const sagaMonitor = reactotron.createSagaMonitor();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  enhancers.push(reactotron.createEnhancer());
}

middlewares.push(sagaMiddleware);

const store = configureStore({
  reducer: rootReducer,
  middleware: [...customizedDefaultMiddleware, ...middlewares],
  devTools: false,
  enhancers: [...enhancers],
});

sagaMiddleware.run(rootSaga);

export default store;
