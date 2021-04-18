import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

export default function Account(props) {
  const {
    tarotPool,
    user,
    setUser,
    token,
    cards,
    setCards,
    reversed,
    initialAccountState,
    stockState,
    setStockState,
    handleStockInput,
    handleUserStockAdd,
    stockList,
    setStockList
  } = props;

  useEffect(() => {
    async function getInitialCards() {
      try {
        setCards(initialAccountState);
      } catch (error) {
        console.log({ error: error.message });
      }
    }
    getInitialCards();
  }, []);

  useEffect(() => {
    async function getStocks() {
      try {
        console.log(user);
      } catch (error) {
        console.log({ error: error.message });
      }
    }
    getStocks();
  }, []);

  return (
      <>
        <div className='stock-list'>
            <h2>Hi</h2>
        </div>
    <div className="account-container">
      <div className="stock-add-container">
        <form
          id="stock-add-form"
          onSubmit={handleUserStockAdd}
        >
          <label htmlFor="submit">
            <input
              type="image"
              id="stock-add-image"
              name="submit"
              src={tarotPool[cards[0].rank]}
              alt="Add Stock"
              style={cards[0].reversed ? reversed : {}}
            />
          </label>
          <label htmlFor="symbol">
            <input
              type="text"
              id='symbol'
              name="symbol"
              onChange={handleStockInput}
            />
          </label>
        </form>
      </div>

      <div className="back-to-dashboard-container">
        <Link to={"/dashboard"}>
          <img
            src={tarotPool[cards[1].rank]}
            alt="Dashboard"
            style={cards[1].reversed ? reversed : {}}
          />
        </Link>
      </div>

      <form
        id="delete-account"
        onSubmit={(event) => {
          event.preventDefault();
          console.log("account deleted");
        }}
      >
        <label htmlFor="submit">
          <input
            type="image"
            id="delete-account-input"
            name="submit"
            src={tarotPool[cards[2].rank]}
            alt="Delete Account"
            style={cards[2].reversed ? reversed : {}}
          />
        </label>
      </form>
    </div>
    </>
  );
}
