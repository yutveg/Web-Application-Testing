import React from 'react'

const Display = props => {
    return (
        <div className="display">
            <h1>Strikes</h1>
            <p>{props.strikes}</p>
            <h1>Balls</h1>
            <p>{props.balls}</p>
        </div>
    )
}

export default Display
