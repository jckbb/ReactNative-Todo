import { createStore, compose, Store, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

function configureStore(): Store {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(rootReducer, compose(applyMiddleware(logger, sagaMiddleware)));
  
  sagaMiddleware.run(rootSaga);
  
  return store;
}

export default configureStore;