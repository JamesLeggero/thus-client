import React from 'react'
import { Link  } from 'react-router-dom'

export default function Landing(props) {

    const { wheel, fool, hermit } = props.tarotPool
    return (
        <div className='landing-container'>
            <img src={wheel} alt='Wheel of Fortune' />
            <Link to={'/signup'}>
                <img src={fool} alt='The Fool' />
            </Link>
            <Link to={'/login'} >
                <img src={hermit} alt='The Hermit' />
            </Link>
            

        </div>
    )
}
