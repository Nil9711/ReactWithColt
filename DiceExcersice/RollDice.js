import React, { Component, Fragment } from 'react';
import Die from './Die'
class RollDice extends Component {
    static defaultProps = {
        dieOptions: [
            'one',
            'two',
            'three',
            'four',
            'five',
            'six'
        ]
    }
    state = {
        firstDiceResult: this.props.dieOptions[0],
        secondDiceResult: this.props.dieOptions[0]
    }

    roll = () => {
        this.setState(
            {
                firstDiceResult: this.props.dieOptions[Math.floor(Math.random() * 6)],
                secondDiceResult: this.props.dieOptions[Math.floor(Math.random() * 6)]
            }
        );

    }

    render() {
        return (
            <Fragment>
                <div>
                    <Die result={this.state.firstDiceResult} />
                    <Die result={this.state.secondDiceResult} />
                </div>
                <button onClick={this.roll}>Roll Dice!</button>

            </Fragment>

        );
    }
}

export default RollDice;