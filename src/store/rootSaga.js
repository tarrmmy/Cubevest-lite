import { all } from 'redux-saga/effects';
import Auth from './auth/saga';
import Dashboard from './dashboard/saga';

export default function* rootSaga() {
  yield all([
    Auth,
    Dashboard
  ])
}