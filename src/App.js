import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history'
import reducers from './store/rootReducers'
import Landing from './pages/Landing'
import saga from './store/rootSaga';
import createSagaMiddleware from '@redux-saga/core';
import { Redirect, Route, Router, Switch } from 'react-router';
import Signup from './pages/Auth/Signup/Signup';
import Login from './pages/Auth/Login/Login';
const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route component={Landing} exact path="/" />
        <Route component={Signup} path="/signup" />
        <Route component={Login} path="/login" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
