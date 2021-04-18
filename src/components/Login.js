import { React, useEffect } from "react";
import axios from "axios";

export default function Login(props) {
  const {
    reversed,
    tarotPool,
    cards,
    setCards,
    initialLoginState,
    handleUserInput,
    handleUserLogin,
  } = props;

  useEffect(() => {
    async function getInitialCards() {
      try {
        setCards(initialLoginState);
      } catch (error) {
        console.log({ error: error.message });
      }
    }
    getInitialCards();
  }, []);

  return (
    <div className="login-container">
      <form id="login" onSubmit={handleUserLogin}>
        <div className="email-container">
          <img src={tarotPool[cards[0].rank]} alt="The Emperor" />
          <label htmlFor="email">
            <input type="text" name="email" onChange={props.handleUserInput} />
          </label>
        </div>
        <div className="password-container">
          <img src={tarotPool[cards[1].rank]} alt="The High Priestess" />
          <label htmlFor="password">
            <input type="password" name="password" onChange={handleUserInput} />
          </label>
        </div>
        <label htmlFor="submit">
          <input
            type="image"
            id="submit"
            name="submit"
            src={tarotPool[cards[2].rank]}
            alt="The Wheel of Fortune"
          />
        </label>
      </form>
    </div>
  );
}
