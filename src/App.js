import { React, useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import axios from "axios";
import Landing from "./components/Landing";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Account from "./components/Account";
import "./App.scss";
import tarotPool from "./img/tarotPool";

function App() {

  const history = useHistory()

  const [user, setUser] = useState({
    // id: "",
    // email: "",
    // password: "",
  });



  
  const [userState, setUserState] = useState({});

  

  const handleUserInput = event => {
    setUserState({...userState, [event.target.name]: event.target.value})
  }

  const handleUserLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/users/login", {
        email: userState.email,
        password: userState.password,
      });
      setUserState({})
      localStorage.token = response.data.token
      localStorage.id = response.data.id
      const userResponse = await axios.get(`http://localhost:3001/api/users/${localStorage.id}`)
      const {id, email, stocks, draws } = userResponse.data
      setUser({
        id: id,
        email: email,
        stocks: stocks,
        draws: draws
      })
      history.push('/dashboard')
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserLogout = event => {
    event.preventDefault()
    setUser({})
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            return <Landing tarotPool={tarotPool} />;
          }}
        />
        <Route
          exact
          path="/signup"
          render={(props) => {
            return <Signup tarotPool={tarotPool} />;
          }}
        />
        <Route
          exact
          path="/login"
          render={(props) => {
            return <Login tarotPool={tarotPool} handleUserInput={handleUserInput} handleUserLogin={handleUserLogin}/>;
          }}
        />
        <Route
          exact
          path="/dashboard"
          render={(props) => {
            return <Dashboard tarotPool={tarotPool} user={user} setUser={setUser}token={localStorage.token}  handleUserLogout={handleUserLogout}/>;
          }}
        />
        <Route
          exact
          path="/account"
          render={(props) => {
            return <Account tarotPool={tarotPool} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
