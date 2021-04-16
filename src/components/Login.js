import axios from 'axios'
import { React, useState } from 'react'

export default function Login(props) {

    


   

    const { emperor, priestess, wheel } = props.tarotPool

    return (
        <div className='login-container'>
            <form onSubmit={props.handleUserLogin}>
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
                </div>
                <label htmlFor='submit'>
                    <input type='image' id='submit' name='submit' src={wheel} alt="The Wheel of Fortune" />
                </label>
            </form>
        </div>
    )
}
