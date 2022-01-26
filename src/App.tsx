import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import './assets/main.css'
import './assets/style/main.scss';

import { UserApp } from './pages/UserApp';
import AppHeader from './cmps/AppHeader';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route path="/" component={UserApp} />
      </Switch>
    </div>
  );
}

export default App;
