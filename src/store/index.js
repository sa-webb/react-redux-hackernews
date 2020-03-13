import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from '../reducers/reducer';

const logger = createLogger();

const store = createStore(rootReducer, undefined, applyMiddleware(logger));

export default store;
