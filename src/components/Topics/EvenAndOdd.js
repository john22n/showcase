import React, { Component } from "react"

export default class EvenAndOdd extends Component {
    constructor() {
        super();
        this.state = {
            evenArray: [],
            oddsArray: [],
            userInput: ''
        }
    }
    handleChange(val) {
        this.setState(
            {
                userInput: val
            }
        );
    }

    assignEvenAndOdds(userInput) {
        const evens = [];
        const odds = [];
        userInput.split(',').forEach( (x) => {
            x = parseInt(x);
            return (x % 2 === 0) ? evens.push(x) : odds.push(x);
        });

        this.setState(
            {
                evenArray: evens,
                oddArray: odds,
            }
        )
    }

    render() {
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input type="text" className="inputLine" onChange={
                    (e) => this.handleChange(e.target.value)
                }>
                </input>
                <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}
                >Split</button>
                <span className="resultsBox">Evens: { JSON.stringify(this.state.evenArray) } </span>
                <span className="resultsBox">Odds: { JSON.stringify(this.state.oddsArray) } </span>
            </div>
        )
    }
}