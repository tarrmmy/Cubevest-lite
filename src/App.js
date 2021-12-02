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
import Faq from './pages/Landing/faq/faq';
import Stories from './pages/Landing/stories/stories';
import Safe from './pages/Landing/safe/safe';
import Invest from './pages/Landing/invest/invest';
import Regular from './pages/Landing/regular/regular';
import Target from './pages/Landing/target/target';
import Footer from './components/Footer/Footer';
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
        <Route component={Faq} path="/faq" />
        <Route component={Invest} path="/invest" />
        <Route component={Stories} path="/stories" />
        <Route component={Safe} path="/safe" />
        <Route component={Target} path="/target" />
        <Route component={Regular} path="/regular" />
        <Route component={Footer} path="/Footer" />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
