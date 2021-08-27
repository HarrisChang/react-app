import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Index from './views/index';
import Context from './views/context';

import './App.scss';

function App() {
  return (
    <div className="App">
      <nav className="nav-bar">
        <ul className="nav-bar-list">
          <li className="nav-bar-item">
            <NavLink exact to="/" activeClassName="selected">
              Index
            </NavLink>
          </li>
          <li className="nav-bar-item">
            <NavLink to="/context" activeClassName="selected">
              Context
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/context">
          <Context />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
