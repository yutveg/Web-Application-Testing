import React from 'react'

const Display = props => {
    return (
        <div data-testid="display" className="display">
            <h1 data-testid="strike-display" >Strikes</h1>
            <p>{props.strikes}</p>
            <h1 data-testid="ball-display" >Balls</h1>
            <p>{props.balls}</p>
        </div>
    )
}

export default Display
