import React from 'react'

function Landing(props) {

    const { world, fool, hermit } = props.tarotPool
    return (
        <div className='landing-container'>
            <img src={world} alt='The World' />
            <img src={fool} alt='The Fool' />
            <img src={hermit} alt='The Hermit' />
            

        </div>
    )
}

export default Landing