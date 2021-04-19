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
  const history = useHistory();

  const [user, setUser] = useState({
    // id: "",
    // email: "",
    // password: "",
  });

  const [stock, setStock] = useState({})
  const [stockList, setStockList] = useState([])
  const [stockState, setStockState] = useState([])

  const [userState, setUserState] = useState({});

  const [cards, setCards] = useState([]);

  const reversed = {
    transform: 'rotate(180deg)'
}

  const initialLandingState = [
    {
      rank: 10,
      reversed: false,
    },
    {
      rank: 0,
      reversed: false,
    },
    {
      rank: 9,
      reversed: false,
    },
  ];

  const initialLoginState = [
    {
      rank: 4,
      reversed: false,
    },
    {
      rank: 2,
      reversed: false,
    },
    {
      rank: 10,
      reversed: false,
    },
  ]

  const initialDashboardState = [
    {
      rank: 10,
      reversed: false,
    },
    {
      rank: 5,
      reversed: false,
    },
    {
      rank: 13,
      reversed: false,
    },
  ]

  const initialAccountState = [
    {
      rank: 5,
      reversed: false,
    },
    {
      rank: 10,
      reversed: false,
    },
    {
      rank: 16,
      reversed: false,
    },
  ]

  const [drawResult, setDrawResult] = useState({});


  const handleUniversalDraw = async (event) => {
    event.preventDefault();
    // const timer = setTimeout(()=>setCards(initialLandingState), 5000)
    
    const response = await axios.post(`http://localhost:3001/api/draws`, {
      userId: 0,
    });
    const { data } = response;
    const { tarotRadix } = data;
    await setDrawResult(data.pickedStock);
    setCards([
      {
        rank: tarotRadix[0][0],
        reversed: tarotRadix[0][1],
      },
      {
        rank: tarotRadix[1][0],
        reversed: tarotRadix[1][1],
      },
      {
        rank: tarotRadix[2][0],
        reversed: tarotRadix[2][1],
      },
    ]);
    // timer = (()=>setCards(initialLandingState), 5000)
    // setTimeout(()=>setCards(initialLandingState), 5000)
    await console.log(drawResult);
  };

  const handleUserInput = (event) => {
    setUserState({ ...userState, [event.target.name]: event.target.value });
  };

  const handleStockInput = (event) => {
    setStockState({ ...stockState, [event.target.name]: event.target.value });
  };

  const handleUserLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3001/api/users/${event.target.id}`,
        {
          //lets me use login OR signup with form field id - userID not needed, just email
          email: userState.email,
          password: userState.password,
        }
      );
      setUserState({});
      localStorage.token = response.data.token;
      localStorage.id = response.data.id;
      const userResponse = await axios.get(
        `http://localhost:3001/api/users/${localStorage.id}`
      );
      const { id, email, stocks, draws } = userResponse.data;
      setUser({
        id: id,
        email: email,
        stocks: stocks,
        draws: draws,
      });
      history.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUserDraw = async event => {
    event.preventDefault()
    const userId = localStorage.id
    try {
      const pickedStock = await axios.post('http://localhost:3001/api/draws', {
        userId: userId
      })
      await console.log(pickedStock.data)
    } catch (error) {
      console.log({error: error.message})
    }
  }

  const handleUserLogout = (event) => {
    event.preventDefault();
    setUser({});
    // localStorage.clear();
    history.push("/");
  };

  const handleUserStockAdd = async event => {
    event.preventDefault()
    try {
      const userId = localStorage.id
      
      // console.log(stockState.symbol)
      const response = await axios.post("http://localhost:3001/api/userstocks", {
        userId: userId,
        symbol: stockState.symbol
      })
      event.target.reset()
      const updatedUser = await axios.get(`http://localhost:3001/api/users/${userId}`)
      await setUser(updatedUser.data)
      // const { data } = response
      // await console.log(data)
      // await console.log(stockState)
    } catch (error) {
      console.log({error: error.message})
      
    }
  }

  const handleUserStockDelete = async event => {
    event.preventDefault()
    // console.log(localStorage.id)
    try {
      const userId = localStorage.id
      const stockId = event.target.id
      const userStock = await axios.get(`http://localhost:3001/api/userstocks/${userId}/${stockId}`)
      const deletedUserStock = await axios.delete(`http://localhost:3001/api/userstocks/delete/`, {
        params: {
          id: userStock.data.id
        }
      })
      const updatedUser = await axios.get(`http://localhost:3001/api/users/${userId}`)
      await setUser(updatedUser.data)
      // console.log(deletedUserStock.data)

    } catch (error) {
      console.log({error: error.message})
    }
  }

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => {
            return (
              <Landing
                tarotPool={tarotPool}
                initialLandingState={initialLandingState}
                cards={cards}
                setCards={setCards}
                reversed={reversed}
                handleUniversalDraw={handleUniversalDraw}
                drawResult={drawResult}
                setDrawResult={setDrawResult}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={(props) => {
            return (
              <Signup
              tarotPool={tarotPool}
              cards={cards}
              setCards={setCards}
              reversed={reversed}
              initialLoginState={initialLoginState}
              handleUserInput={handleUserInput}
              handleUserLogin={handleUserLogin}
              />
            );
          }}
        />
        <Route
          exact
          path="/login"
          render={(props) => {
            return (
              <Login
                tarotPool={tarotPool}
                cards={cards}
                setCards={setCards}
                reversed={reversed}
                initialLoginState={initialLoginState}
                handleUserInput={handleUserInput}
                handleUserLogin={handleUserLogin}
              />
            );
          }}
        />
        <Route
          exact
          path="/dashboard"
          render={(props) => {
            return (
              <Dashboard
                tarotPool={tarotPool}
                user={user}
                setUser={setUser}
                token={localStorage.token}
                cards={cards}
                setCards={setCards}
                reversed={reversed}
                initialDashboardState={initialDashboardState}
                handleUserDraw={handleUserDraw}
                handleUserLogout={handleUserLogout}
              />
            );
          }}
        />
        <Route
          exact
          path="/account"
          render={(props) => {
            return (
            <Account 
              tarotPool={tarotPool} 
              user={user}
              setUser={setUser}
              token={localStorage.token}
              cards={cards}
              setCards={setCards}
              reversed={reversed}
              initialAccountState={initialAccountState}
              stockState={stockState}
              setStockState={setStockState}
              handleStockInput={handleStockInput}
              handleUserStockAdd={handleUserStockAdd}
              handleUserStockDelete={handleUserStockDelete}
              stockList={stockList}
              setStockList={setStockList}
            />
            )
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
