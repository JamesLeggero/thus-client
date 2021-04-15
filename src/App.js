import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Landing} />
      </Switch>
      
    </div>
  );
}

export default App;
