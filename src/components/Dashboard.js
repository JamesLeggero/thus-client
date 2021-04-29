import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmailHeading from "./EmailHeading";
import DrawResult from './DrawResult'

export default function Dashboard(props) {
  const {
    user,
    cards,
    setCards,
    reversed,
    initialDashboardState,
    handleUserDraw,
    handleUserLogout,
    tarotPool,
    drawResult,
    setDrawResult
  } = props;

  useEffect(() => {
    async function getInitialCards() {
      try {
        setCards(initialDashboardState);
        setDrawResult({})
      } catch (error) {
        console.log({ error: error.message });
      }
    }
    getInitialCards();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setCards(initialDashboardState), 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
    <div className="dashboard-container">
      {/* {props.user.id > 0 && <EmailHeading email={user.email} />} */}
      <div className='tooltip'>

      <form
        id="user-draw"
        onSubmit={handleUserDraw}
      >
        <label htmlFor="submit">
          <input
            type="image"
            id="submit"
            name="submit"
            src={tarotPool[cards[0].rank]}
            alt="User Draw"
            style={cards[0].reversed ? reversed : {}}
          />
        </label>
        <span className="tooltiptext">USER DRAW</span>
      </form>
      </div>

      <div className="to-account-container">
      <div className='tooltip' >
        <Link to={"/account"}>
          <img
            src={tarotPool[cards[1].rank]}
            alt="Account"
            style={cards[1].reversed ? reversed : {}}
          />
        </Link>
          <span className="tooltiptext after-link">ACCOUNT</span>
      </div>
      </div>
      <div className='tooltip'>
      <form id="logout" onSubmit={handleUserLogout}>
        <label htmlFor="logout">
          <input
            type="image"
            id="logout-input"
            name="submit"
            src={tarotPool[cards[2].rank]}
            alt="User Logout"
            style={cards[2].reversed ? reversed : {}}
          />
        </label>
        <span className="tooltiptext">LOG OUT</span>
      </form>
      </div>
      
    </div>
    <DrawResult drawResult={drawResult} setDrawResult={setDrawResult} />
    </>
  );
}
