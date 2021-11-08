import { all, takeEvery, put, call } from 'redux-saga/effects'
import { actions } from './action'

export function* LOGOUT() {
  // const success = yield call(jwt.logout)
  console.log("hello")
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGOUT, LOGOUT)
  ])
}