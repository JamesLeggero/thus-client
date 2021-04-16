import React from 'react'
import { Link  } from 'react-router-dom'

export default function Dashboard(props) {

    const { wheel, hierophant, death } = props.tarotPool
    return (
        <div className='dashboard-container'>
           

                <form id='user-draw' onSubmit={event=>{
                    event.preventDefault()
                    console.log('draw initiated')
                }}>
                    <label htmlFor='submit'>
                        <input type='image' id='user-draw-input' name='submit' src={wheel} alt="The Wheel of Fortune" />
                    </label>
                </form>
                
         
            <div className='to-account-container' >
                <Link to={'/account'} >

                    <img src={hierophant} alt='The Hierophant' />
                </Link>

            </div>
            <form id='logout' onSubmit={event=>{
                    event.preventDefault()
                    console.log('logout initiated')
                }}>
                    <label htmlFor='logout'>
                        <input type='image' id='logout-input' name='submit' src={death} alt="Death" />
                    </label>
                </form>
            {/* <div className='logout-container' >
                <img src={death} alt='Death' />
            </div> */}
            
        </div>
            
    )
}
