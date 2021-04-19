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
      </form>

      <div className="to-account-container">
        <Link to={"/account"}>
          <img
            src={tarotPool[cards[1].rank]}
            alt="Account"
            style={cards[1].reversed ? reversed : {}}
          />
        </Link>
      </div>
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
      </form>
      {/* <div className='logout-container' >
                <img src={death} alt='Death' />
            </div> */}
    </div>
    <DrawResult drawResult={drawResult} setDrawResult={setDrawResult} />
    </>
  );
}
