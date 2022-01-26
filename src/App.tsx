import React from 'react';
import { Route, Switch,Router } from 'react-router-dom';
import './App.css';
import './assets/main.css'
import './assets/style/main.scss';

import { Home } from './pages/Home';
import AppHeader from './cmps/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
