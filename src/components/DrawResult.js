import React from 'react'

export default function DrawResult(props) {

    const style = {
        color: 'pink',
        transform: props.drawResult.aroonOsc < 0 ? 'rotate(-180deg' : ''  
    }

    return (
        <div>
            {props.drawResult.aroonOsc && <h2 style={style}>{props.drawResult.symbol}</h2>}
        </div>
    )
}
