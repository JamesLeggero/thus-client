import React from 'react'

function Landing(props) {

    const { world, fool, hermit } = props.tarotPool
    return (
        <div className='landing-container'>
            <img src={world} alt='The World' />
            

        </div>
    )
}

export default Landing