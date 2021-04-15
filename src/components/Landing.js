import React from 'react'

export default function Landing(props) {

    const { wheel, fool, hermit } = props.tarotPool
    return (
        <div className='landing-container'>
            <img src={wheel} alt='Wheel of Fortune' />
            <img src={fool} alt='The Fool' />
            <img src={hermit} alt='The Hermit' />
            

        </div>
    )
}
