import { React, useState, useEffect } from 'react'
import { Link  } from 'react-router-dom'
import DrawResult from './DrawResult'

export default function Landing(props) {

    const { tarotPool, initialLandingState, cards, setCards, drawResult, setDrawResult, reversed } = props

    useEffect(()=>{
        const timer = setTimeout(()=>setCards(initialLandingState), 5000 )
        return ()=>{
            clearTimeout(timer)
        }
      })

    // const dark = {
    //     filter: 'invert(0.5)'
    // }

    

    

        
    

    useEffect(()=>{
        async function getInitialCards() {
            try {
                
                setCards(initialLandingState)
            } catch (error) {
                console.log({error: error.message})
                
            }
        }
        getInitialCards()
    }, [])

    // useEffect(()=>{

    // }, cards)


    // const { wheel, fool, hermit } = props.tarotPool
    return (
        <div>
        {cards.length > 0 && 
        <div className='landing-container'>
            <form id='0' onSubmit={props.handleUniversalDraw}>
                
                <label htmlFor='submit'>
                    <input 
                        type='image' 
                        id='submit' 
                        name='submit' 
                        src={tarotPool[cards[0].rank]}
                        alt="First Card" 
                        style={
                            cards[0].reversed? reversed : {}
                        } 
                    />
                </label>
            <Link to={'/signup'}>
                <img 
                    src={tarotPool[cards[1].rank]} 
                    alt='Second Card'
                    style={
                        cards[1].reversed? reversed : {}
                    } 
                />
            </Link>
            <Link to={'/login'} >
                <img 
                src={tarotPool[cards[2].rank]} 
                alt='Third Card'
                style={
                    cards[2].reversed? reversed : {}
                } 
                />
            </Link>
            </form>
            

        </div>
        }

        <DrawResult drawResult={drawResult} setDrawResult={setDrawResult}/>
        </div>
    )
}
