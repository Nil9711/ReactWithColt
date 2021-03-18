import React, { Component } from 'react';

class Clicker extends Component {
    state = { randomNum: 1 }

    clickHandler = (e) => {
        this.setState({ randomNum: Math.floor(Math.random() * 10) + 1 });
    }
    render() {
        return (
            <div>
                <h2>
                    Random Num : {this.state.randomNum}
                </h2>
                {
                    this.state.randomNum === 7 ?
                        <h3>You Win!</h3>
                        :
                        <button onClick={this.clickHandler}>
                            Random Number!
                        </button>
                }
            </div>
        );
    }
}

export default Clicker;