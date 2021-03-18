import React, { Component } from 'react';
import './CoinFlip.css'
class CoinFlip extends Component {
    state = {

        currentCoinState: '',
        headsScore: 0,
        tailsScore: 0,
        totalFlips: 0

    };

    addScore = (chances) => {
        let currentTotalFlips = this.state.totalFlips;
        this.setState({ totalFlips: currentTotalFlips + 1 })
        if (chances === 0) {
            let headsCurrentScore = this.state.headsScore;
            this.setState({ headsScore: headsCurrentScore + 1 })
        } else {
            let tailsCurrentScore = this.state.tailsScore;
            this.setState({ tailsScore: tailsCurrentScore + 1 })
        }
    }

    flipTheCoin = () => {
        let chances = Math.floor(Math.random() * 2);
        if (chances === 0) {
            this.setState({ currentCoinState: 'https://tinyurl.com/react-coin-heads-jpg' }, this.addScore(chances))
        } else {
            this.setState({ currentCoinState: 'https://cdn.shopify.com/s/files/1/0686/9287/products/coin_ring_barber_Half_Dollar_tails_6_grande.JPG?v=1510168938' }, this.addScore(chances))
        }
    }

    render() {
        return (

            <div>
                <h2>
                    Let's Flip a coin!
                </h2>

                <section>
                    <img className="CoinFlip-img" src={this.state.currentCoinState} alt={this.state.coinStatus} />
                    <div>
                        <button onClick={this.flipTheCoin}>Flip ME !</button>
                    </div>
                    <div>
                        Heads Won : {this.state.headsScore}
                    </div>
                    <div>
                        Tails Won : {this.state.tailsScore}
                    </div>
                    <div>
                        Out of {this.state.totalFlips} Total Flips!
                    </div>
                </section>
            </div>

        );
    }
}

export default CoinFlip;