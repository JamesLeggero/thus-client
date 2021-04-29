import { React, useEffect } from "react";

export default function Signup(props) {
  const {
    tarotPool,
    cards,
    setCards,
    reversed,
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
    <div className="signup-container">
      <form id="signup" onSubmit={props.handleUserLogin}>
        <div className="email-container">
      <div className='tooltip'>
          <img src={tarotPool[cards[0].rank]} alt="Email" />
          <label htmlFor="email">
            <input type="text" name="email" onChange={props.handleUserInput} />
          </label>
          <span className="tooltiptext NU">EMAIL</span>
        </div>
        </div>

        
        <div className="password-container">
          <div className='tooltip'>
          <img src={tarotPool[cards[1].rank]} alt="Password" />
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              onChange={props.handleUserInput}
            />
          </label>
          <span className="tooltiptext NU">PASSWORD</span>
        </div>
        </div>
        <div className='tooltip'>
        <label htmlFor="submit">
          <input
            type="image"
            id="submit"
            name="submit"
            src={tarotPool[cards[2].rank]}
            alt="Dashboard"
          />
        </label>
        <span className="tooltiptext">DASHBOARD</span>
        </div>
      </form>
      
    </div>
  );
}
