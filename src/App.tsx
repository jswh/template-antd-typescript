import React, { Component } from 'react';
import Index from './pages/index'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Index />
          </Route>
        </Switch>
      </Router >
    );
  }
}

export default App;