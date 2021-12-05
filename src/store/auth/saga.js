import { all, takeEvery, put, call } from 'redux-saga/effects'
import { actions } from './action'
import {login} from '../service'

export function* LOGOUT() {
  // const success = yield call(jwt.logout)
}

export function* LOGIN({payload}){
  const {email, password} = payload
  yield put({
    type: 'auth/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(login, email, password)
  console.log(success)
  if (success) {
    yield put({
      type: 'auth/SET_STATE',
      payload: {
        data: success,
        loading:false
      },
    })
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGOUT, LOGOUT),
    takeEvery(actions.LOGIN, LOGIN)
  ])
}