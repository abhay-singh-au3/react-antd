import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

import appReducer from './reducer/appReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  data: appReducer,
});

const store = createStore(reducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const mapStateToProps = (state) => state;

export { store, mapStateToProps };
