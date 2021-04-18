import { React, useState, useEffect } from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios'
import EmailHeading from './EmailHeading'



export default function Dashboard(props) {

    const { user, cards, setCards, reversed, initialDashboardState, tarotPool } = props

    useEffect(()=>{
        async function getInitialCards() {
            try {
                
                setCards(initialDashboardState)
            } catch (error) {
                console.log({error: error.message})
                
            }
        }
        getInitialCards()
    }, [])
    

    return (
        <div className='dashboard-container'>
            {/* {props.user.id > 0 && <EmailHeading email={user.email} />} */}
           

                <form id='user-draw' onSubmit={event=>{
                    event.preventDefault()
                    console.log('draw initiated')
                }}>
                    <label htmlFor='submit'>
                        <input 
                        type='image' 
                        id='submit' 
                        name='submit' 
                        src={tarotPool[cards[0].rank]}
                        alt="User Draw" 
                        style={cards[0].reversed? reversed : {}} 
                        />
                    </label>
                </form>
                
         
            <div className='to-account-container' >
                <Link to={'/account'} >

                    <img 
                        src={tarotPool[cards[1].rank]} 
                        alt='Account'
                        style={cards[0].reversed? reversed : {}} 
                     />
                </Link>

            </div>
            <form id='logout' onSubmit={props.handleUserLogout}>
                    <label htmlFor='logout'>
                        <input 
                            type='image' 
                            id='logout-input' 
                            name='submit' 
                            src={tarotPool[cards[2].rank]} 
                            alt="User Logout"
                            style={cards[0].reversed? reversed : {}}
                        />
                    </label>
                </form>
            {/* <div className='logout-container' >
                <img src={death} alt='Death' />
            </div> */}
            
        </div>
            
    )
}
