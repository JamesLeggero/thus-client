import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import Signup from './components/Signup'
import './App.scss';
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
        <Route exact path='/signup' render={props => {
          return (
            <Signup tarotPool={tarotPool} />
          )
        }} />
      </Switch>
      
    </div>
  );
}

export default App;
