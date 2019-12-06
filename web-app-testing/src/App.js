import React, { useState } from 'react'
import './App.css'
import Display from './Components/Display.js'
import Dashboard from './Components/Dashboard.js'

class App extends React.Component {
    state = {
        strikes: 0,
        balls: 0,
    }

    //Function to handle state when user presses "foul" button on dashboard
    handleFoul = () => {
        console.log("i worked")
        if (this.state.strikes === 0) this.setState({ strikes: 1 })
        //Strikes only go up to 2 from fouls- do not cause strike out
        else if (this.state.strikes === 1) this.setState({ strikes: 2 })
        else return
    }

    //Function to handle state when user presses "strike" button on dashboard
    handleStrike = () => {
        console.log("i worked")
        if (this.state.strikes < 2)
            this.setState({ strikes: this.state.strikes + 1 })
        //State reset when player strikes out
        else {
            this.setState({ strikes: 3 })
            setTimeout(() => {
                this.setState({ strikes: 0, balls: 0 })
            }, 2000)
        }
    }

    //Function to handle state when user presses "ball" button on dashboard
    handleBall = () => {
        console.log("i worked")
        if (this.state.balls <= 2) this.setState({ balls: this.state.balls + 1 })
        //State reset when player walks
        else {
            this.setState({ balls: 4 })
            setTimeout(() =>  {
                this.setState({ strikes: 0, balls: 0 })
            }, 2000)
        }
    }

    //Function to handle state when user presses "hit" button on dashboard
    handleHit = () => {
        console.log("i worked")
        //State reset on hit
        this.setState({ strikes: 0, balls: 0 })
    }

    render() {
        return (
            <div className="App">
                <Display
                    strikes={this.state.strikes}
                    balls={this.state.balls}
                />
                <Dashboard
                    handleFoul={this.handleFoul}
                    handleBall={this.handleBall}
                    handleStrike={this.handleStrike}
                    handleHit={this.handleHit}
                />
            </div>
        )
    }
}

export default App
