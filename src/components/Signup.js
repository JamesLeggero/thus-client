import React from 'react'

export default function Signup(props) {
    const { emperor, priestess, chariot } = props.tarotPool
    return (
        <div className='signup-container'>
            <form onSubmit={(event)=>{
                event.preventDefault()
                console.log('submitted')}}>
                <div className='email-container'>
                    <img src={emperor} alt='The Emperor' />
                    <label htmlFor='email'>
                        <input type='text' name='email' />
                    </label>
                </div>
                <div className='password-container'>
                    <img src={priestess} alt='The High Priestess' />
                    <label htmlFor='password'>
                        <input type='text' name='password' />
                    </label>
                </div>
                <label htmlFor='submit'>
                    <input type='image' id='submit' name='submit' src={chariot} alt="The chariot" />
                </label>
            </form>
        </div>
    )
}
