import logo from './logo.svg';
import './App.css';
import { applyMiddleware, createStore } from 'redux';
import reducers from './store/rootReducers'
import Landing from './pages/Landing'
import saga from './store/rootSaga';
import createSagaMiddleware from '@redux-saga/core';
// const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
sagaMiddleware.run(saga)

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))

function App() {
  return (
    <Landing />
  );
}

export default App;
