import { React, useEffect } from "react";

export default function Signup(props) {

  const { tarotPool, cards, setCards, reversed, initialLoginState, handleUserInput, handleUserLogin } = props;

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
    <div className="signup-container">
      <form id="signup" onSubmit={props.handleUserLogin}>
        <div className="email-container">
          <img 
            src={tarotPool[cards[0].rank]} 
            alt="Email" 
            />
          <label htmlFor="email">
            <input type="text" name="email" onChange={props.handleUserInput} />
          </label>
        </div>
        <div className="password-container">
          <img 
            src={tarotPool[cards[1].rank]} 
            alt="Password" 
          />
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              onChange={props.handleUserInput}
            />
          </label>
          {/* <label htmlFor='passwordB'>
                        <input type='password' name='passwordB' />
                    </label> */}
        </div>
        <label htmlFor="submit">
          <input
            type="image"
            id="submit"
            name="submit"
            src={tarotPool[cards[2].rank]}
            alt="Dashboard"
          />
        </label>
      </form>
    </div>
  );
}
