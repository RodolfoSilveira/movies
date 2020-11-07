import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks';
import sagas from './sagas';
import tron from '../config/ReactotronConfig';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor,
});

middlewares.push(sagaMiddleware);

const composer = process.env.NODE_ENV === 'development'
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

sagaMiddleware.run(sagas);

export default store;
