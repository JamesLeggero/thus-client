import React from 'react'

export default function DrawResult(props) {

    // const style = {
    //     color: 'pink',
    //     transform: props.drawResult.pickedStock.aroonOsc < 0 ? 'rotate(-180deg)' : ''  
    // }

    const style = {}

    return (
        <div>
            {Object.keys(props.drawResult.pickedStock) > 0 && <h2 style={style}>{props.drawResult.pickedStock.symbol}</h2>}
            {/* <h2 style={style}>{props.drawResult.pickedStock.symbol}</h2> */}
            
        </div>
    )
}
