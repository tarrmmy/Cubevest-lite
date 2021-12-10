import { actions } from './action'

const initialState = {
  data:{},
  id: '',
  name: 'Lukas Mase',
  role: '',
  email: '',
  avatar: '',
  loading: false,
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_NAME:
      return { ...state, ...action.payload }
    case actions.SET_STATE:
      return { ...state, ...action.payload }
    default:
      return state
  }
}