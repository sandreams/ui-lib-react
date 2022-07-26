import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Link, Switch, Route, Redirect } from 'react-router-dom';
import Icon from './icon/icon.example';
import Dialog from './dialog/dialog.example';
import Button from './button/button.example';
import './index.scss';
const App: React.FC = () => {
  return (
    <Router>
      <header>
        <h2>导航</h2>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/icon">Icon</Link>
          </li>
          <li>
            <Link to="/button">Button</Link>
          </li>
          <li>
            <Link to="/dialog">Dialog</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          <Redirect to="/icon" />
        </Route>
        <Route path="/icon">
          <Icon />
        </Route>
        <Route path="/button">
          <Button />
        </Route>
        <Route path="/dialog">
          <Dialog />
        </Route>
      </Switch>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
