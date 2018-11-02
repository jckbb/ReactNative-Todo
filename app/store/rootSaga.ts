import { all, fork } from 'redux-saga/effects';
import todoSagas from '../data/todo/sagas';
import createSagas from '../containers/CreateForm/data/sagas';

export function* rootSaga() {
  yield all([
    fork(todoSagas),
    fork(createSagas)
  ]);
}