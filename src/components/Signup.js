import React from 'react'

export default function Signup(props) {

    const { emperor, priestess, wheel } = props.tarotPool

    return (
        <div className='signup-container'>
            <form id='signup' onSubmit={props.handleUserLogin}>
                <div className='email-container'>
                    <img src={emperor} alt='The Emperor' />
                    <label htmlFor='email'>
                        <input type='text' name='email' onChange={props.handleUserInput}/>
                    </label>
                </div>
                <div className='password-container'>
                    <img src={priestess} alt='The High Priestess' />
                    <label htmlFor='password'>
                        <input type='password' name='password' onChange={props.handleUserInput}/>
                    </label>
                    {/* <label htmlFor='passwordB'>
                        <input type='password' name='passwordB' />
                    </label> */}
                </div>
                <label htmlFor='submit'>
                    <input type='image' id='submit' name='submit' src={wheel} alt="The Wheel of Fortune" />
                </label>
            </form>
        </div>
    )
}
