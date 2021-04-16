import React from 'react'
import { Link } from 'react-router-dom'

export default function Account(props) {

    const { hierophant, tower, wheel } = props.tarotPool
    return (
        <div className='account-container'>
           

                <form id='stock-add' onSubmit={event=>{
                    event.preventDefault()
                    console.log('stock add initiated')
                }}>
                    <label htmlFor='submit'>
                        <input type='image' id='stock-add-input' name='submit' src={hierophant} alt="The Heirophant" />
                    </label>
                </form>

                <div className='back-to-dashboard-container' >
                <Link to={'/dashboard'} >

                    <img src={wheel} alt='The Wheel of Fortune' />
                </Link>

            </div>

                <form id='delete-account' onSubmit={event=>{
                    event.preventDefault()
                    console.log('account deleted')
                }}>
                    <label htmlFor='submit'>
                        <input type='image' id='delete-account-input' name='submit' src={tower} alt="The Tower" />
                    </label>
                </form>
            
        </div>
            
    )
}