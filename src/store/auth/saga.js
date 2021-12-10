import { all, takeEvery, put, call } from 'redux-saga/effects'
import { actions } from './action'
import {apiCalls} from '../service'
import { notification } from 'antd'
import { history } from '../../App'

export function* LOGOUT() {
  // const success = yield call(jwt.logout)
}

export function* LOGIN({payload}){
  yield put({
    type: 'auth/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(apiCalls, payload, 'auth/login', 'post')
  console.log(success)
  if (success.status) {
    yield put({
      type: 'auth/SET_STATE',
      payload: {
        data: success,
        loading:false
      },
    })
  }
  if(!success.status){
    yield put({
      type: 'auth/SET_STATE',
      payload: {
        loading:false
      },
    })
    notification.open({
      message: 'Login Failed',
      description:success.message,     
    })
  }
}

export function* SIGNUP({payload}){
  const {email, password} = payload
  yield put({
    type: 'auth/SET_STATE',
    payload: {
      loading: true,
    },
  })
  const success = yield call(apiCalls, payload, 'auth/signup', 'post')
  if (success) {
    yield put({
      type: 'auth/SET_STATE',
      payload: {
        loading:false
      },
    })
    notification.open({
      message: 'Registration successful',
      description:success.message,
      onClick: () => {
        console.log('Notification Clicked!');
      },
    });
    history.push('/login')
  }
}


export default function* rootSaga() {
  yield all([
    takeEvery(actions.LOGOUT, LOGOUT),
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.SIGNUP, SIGNUP),
  ])
}