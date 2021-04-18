import { React, useEffect } from 'react'

export default function DrawResult(props) {

    const style = {
        color: 'pink',
        transform: props.drawResult.aroonOsc < 0 ? 'rotate(-180deg)' : ''  
    }

    useEffect(()=>{
        const timer = setTimeout(()=>props.setDrawResult({}), 5000 )
        return ()=>{
            clearTimeout(timer)
        }
      })

    return (
        <div >
            {props.drawResult.symbol && <h2 className='draw-result' style={style}>{props.drawResult.symbol}</h2>}
        </div>
    )
}
