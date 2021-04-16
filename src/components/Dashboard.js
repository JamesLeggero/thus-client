import { React, useState, useEffect } from 'react'
import { Link  } from 'react-router-dom'
import axios from 'axios'
import EmailHeading from './EmailHeading'



export default function Dashboard(props) {

    const { user } = props

    console.log(user)

    // useEffect(() => {
    //     async function fetchData() {
    //         if (props.user.id !== '') {
    //             // const response = await axios.get(`http://localhost:3001/api/users/${localStorage.id}`)
    //             // const data = await response.data
    //             // props.setUser(data)
    //             // setUser({
    //             //     id: data.id,
    //             //     email: data.email,
    //             //     draws: data.draws,
    //             //     stocks: data.stocks})
    //             await console.log(props.user)
    //             console.log('token: ' + localStorage.token)
    //         }
    //     }
    //     fetchData()
    // }, [])
    
    const { wheel, hierophant, death } = props.tarotPool

    return (
        <div className='dashboard-container'>
            {props.user.id > 0 && <EmailHeading email={user.email} />}
           

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
            <form id='logout' onSubmit={props.handleUserLogout}>
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
