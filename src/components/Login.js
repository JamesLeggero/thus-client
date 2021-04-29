import { React, useEffect } from "react";

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
          <div className='tooltip' >
          <img
            src={tarotPool[cards[0].rank]}
            alt="Email"
            style={cards[0].reversed ? reversed : {}}
          />
          <label htmlFor="email">
            <input type="text" name="email" onChange={handleUserInput} />
          </label>
          <span className="tooltiptext NU">EMAIL</span>
          </div>
        </div>
        <div className="password-container">
          <div className='tooltip'>
          <img
            src={tarotPool[cards[1].rank]}
            alt="Password"
            style={cards[1].reversed ? reversed : {}}
          />
          <label htmlFor="password">
            <input type="password" name="password" onChange={handleUserInput} />
          </label>
          <span className="tooltiptext NU">PASSWORD</span>
          </div>
        </div>
        <div className='tooltip' >
        <label htmlFor="submit">
          <input
            type="image"
            id="submit"
            name="submit"
            src={tarotPool[cards[2].rank]}
            alt="Submit"
            style={cards[2].reversed ? reversed : {}}
          />
        </label>
        <span className="tooltiptext">DASHBOARD</span>
        </div>
      </form>
    </div>
  );
}
