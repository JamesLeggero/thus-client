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
    handleUserStockDelete,
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
          const compare = (a, b) => {
             if (a.symbol < b.symbol) return -1
             if (a.symbol > b.symbol) return 1
             return 0 
          }

          user.stocks.sort(compare)
        console.log(user);
      } catch (error) {
        console.log({ error: error.message });
      }
    }
    getStocks();
  }, [user]);

 

  const showStocks = user.stocks.map((stock, i) => {
      return (
      <div key={user.stocks[i].id}>
          <form id={user.stocks[i].id} onSubmit={handleUserStockDelete}>
          <h2>{user.stocks[i].symbol}</h2>
          <input 
            type='image'
            name='submit'
            src={tarotPool[13]}
            alt='Delete Stock'
          />

          </form>
          </div>
      )
        
  })



  return (
      <>
        <div className='stock-list'>
            {/* <h2>Hi</h2> */}
            {showStocks}
        </div>
    <div className="account-container">
      <div className="stock-add-container">
        <div className='tooltip' >
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
          <span className="tooltiptext" style={{
            position: 'relative',
            bottom: '15px'
          }}>UNIVERSAL DRAW</span>
        </form>
        </div>
      </div>

      <div className="back-to-dashboard-container">
        <div className='tooltip' >
        <Link to={"/dashboard"}>
          <img
            src={tarotPool[cards[1].rank]}
            alt="Dashboard"
            style={cards[1].reversed ? reversed : {}}
          />
        </Link>
        <span className="tooltiptext after-link" style={{top: '-0.5px'}}>UNIVERSAL DRAW</span>
        </div>
      </div>
      

      <form
        id="delete-account"
        onSubmit={(event) => {
          event.preventDefault();
          console.log("account deleted");
        }}
      >
        <label htmlFor="submit">
          <div className='tooltip acc-del'>
          <input
            type="image"
            id="delete-account-input"
            name="submit"
            src={tarotPool[cards[2].rank]}
            alt="Delete Account"
            style={cards[2].reversed ? reversed : {}}
          />
        <span className="tooltiptext">UNIVERSAL DRAW</span>
          </div>
        </label>
      </form>
      </div>
    
    </>
  );
}
