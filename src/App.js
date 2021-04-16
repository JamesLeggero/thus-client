import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './components/Landing'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Account from './components/Account'
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
        <Route exact path='/login' render={props => {
          return (
            <Login tarotPool={tarotPool} />
          )
        }} />
        <Route exact path='/dashboard' render={props => {
          return (
            <Dashboard tarotPool={tarotPool} />
          )
        }} />
        <Route exact path='/account' render={props => {
          return (
            <Account tarotPool={tarotPool} />
          )
        }} />

      </Switch>
      
    </div>
  );
}

export default App;
