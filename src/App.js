import './App.css';
import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history'
import reducers from './store/rootReducers'
import Landing from './pages/Landing'
import saga from './store/rootSaga';
import createSagaMiddleware from '@redux-saga/core';
import { Redirect, Route, Router, Switch } from 'react-router-dom';
import Signup from './pages/Auth/Signup/Signup';
import Login from './pages/Auth/Login/Login';
import { Provider } from 'react-redux';
const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

export const store = createStore(reducers, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(saga)

function App() {
  return (
    <Provider store={store} >
      <Router history={history}>
        <Switch>
          <Route component={Landing} exact path="/" />
          <Route path="/signup">
            <Signup />
          </Route>
          <Route component={Login} path="/login" />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
