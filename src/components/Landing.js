import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DrawResult from "./DrawResult";

export default function Landing(props) {
  const {
    tarotPool,
    initialLandingState,
    cards,
    setCards,
    drawResult,
    setDrawResult,
    handleUniversalDraw,
    reversed,
  } = props;

  useEffect(() => {
    const timer = setTimeout(() => setCards(initialLandingState), 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  // const dark = {
  //     filter: 'invert(0.5)'
  // }

  useEffect(() => {
    async function getInitialCards() {
      localStorage.clear();
      try {
        setCards(initialLandingState);
        setDrawResult({});
      } catch (error) {
        console.log({ error: error.message });
      }
    }
    getInitialCards();
  }, []);

  // useEffect(()=>{

  // }, cards)

  // const { wheel, fool, hermit } = props.tarotPool
  return (
    <div>
      {cards.length > 0 && (
        <div className="landing-container">
          <div className="tooltip">
            <form id="0" onSubmit={handleUniversalDraw}>
              <label htmlFor="submit">
                <input
                  type="image"
                  id="submit"
                  name="submit"
                  src={tarotPool[cards[0].rank]}
                  alt="Universal Draw"
                  style={cards[0].reversed ? reversed : {}}
                />
              </label>
              <span className="tooltiptext">UNIVERSAL DRAW</span>
            </form>
          </div>
          <div className="tooltip">
            <Link to={"/signup"}>
              <img
                src={tarotPool[cards[1].rank]}
                alt="New User"
                style={cards[1].reversed ? reversed : {}}
              />
            </Link>
            <span className="tooltiptext">NEW USERS</span>
          </div>
          <div className="tooltip">
            <Link to={"/login"}>
              <img
                src={tarotPool[cards[2].rank]}
                alt="Returning Users"
                style={cards[2].reversed ? reversed : {}}
              />
            </Link>
            <span className="tooltiptext">RETURNING USERS</span>
          </div>
        </div>
      )}

      <DrawResult drawResult={drawResult} setDrawResult={setDrawResult} />
    </div>
  );
}
