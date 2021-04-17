import React from 'react'
import { Link  } from 'react-router-dom'
import DrawResult from './DrawResult'

export default function Landing(props) {

    const { wheel, fool, hermit } = props.tarotPool
    return (
        <div>
        <div className='landing-container'>
            <form id='0' onSubmit={props.handleUniversalDraw}>
                
                <label htmlFor='submit'>
                    <input type='image' id='submit' name='submit' src={wheel} alt="The Wheel of Fortune" />
                </label>
            <Link to={'/signup'}>
                <img src={fool} alt='The Fool' />
            </Link>
            <Link to={'/login'} >
                <img src={hermit} alt='The Hermit' />
            </Link>
            </form>
            

        </div>

        <DrawResult drawResult={props.drawResult}/>
        </div>
    )
}
