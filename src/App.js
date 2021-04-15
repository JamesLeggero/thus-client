import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import './App.css';
import tarotPool from './img/tarotPool';

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route exact path='/' render={props => {
          return (
            <Landing tarotPool={tarotPool} />
          )
        }} />
      </Switch>
      
    </div>
  );
}

export default App;
