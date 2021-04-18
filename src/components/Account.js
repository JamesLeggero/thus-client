import { React, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function Account(props) {

    const { tarotPool, user, setUser, token, cards, setCards, reversed, initialAccountState, handleUserInput } = props

    useEffect(()=>{
        async function getInitialCards() {
            try {
                
                setCards(initialAccountState)
            } catch (error) {
                console.log({error: error.message})
                
            }
        }
        getInitialCards()
    }, [])



    
    return (
        <div className='account-container'>
           

                <form id='stock-add' onSubmit={event=>{
                    event.preventDefault()
                    console.log('stock add initiated')
                }}>
                    <label htmlFor='submit'>
                        <input 
                            type='image' 
                            id='stock-add-image' 
                            name='submit' 
                            src={tarotPool[cards[0].rank]} 
                            alt="First Card" 
                            style={cards[0].reversed? reversed : {}} 
                        />
                    </label>
                    {/* <label htmlFor='stock-add-input'>
                        <input type='text' name='stock-add-input' onChange={handleUserInput}/>
                    </label> */}
                </form>

                <div className='back-to-dashboard-container' >
                <Link to={'/dashboard'} >

                    <img 
                        src={tarotPool[cards[1].rank]} 
                        alt='Second Card' 
                        style={cards[2].reversed? reversed : {}} 
                    />
                </Link>

                </div>

                <form id='delete-account' onSubmit={event=>{
                    event.preventDefault()
                    console.log('account deleted')
                }}>
                    <label htmlFor='submit'>
                        <input 
                            type='image' 
                            id='delete-account-input' 
                            name='submit' 
                            src={tarotPool[cards[2].rank]} 
                            alt="Third Card" 
                            style={cards[2].reversed? reversed : {}} 
                        />
                    </label>
                </form>
            
        </div>
            
    )
}