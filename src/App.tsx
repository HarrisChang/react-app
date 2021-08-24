import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import Index from './views/index';
import About from './views/about';

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
            <NavLink to="/about" activeClassName="selected">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Index />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
