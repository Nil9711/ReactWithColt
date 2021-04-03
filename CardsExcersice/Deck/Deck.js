import React, { Component } from 'react';
import Card from '../Card/Card'
import axios from 'axios'

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = { deckId: "", currentDrawCardImage: "", remainingCards: "", isOutOfCards: false }
        this.handleClick = this.handleClick.bind(this)
    }

    async handleClick() {
        const url = `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`;
        let response = await axios.get(url);
        this.setState({ currentDrawCardImage: response.data.cards[0].image, remainingCards: this.state.remainingCards - 1 })
        if (this.state.remainingCards === 0) {
            this.setState({ isOutOfCards: true })
        }
    }
    async componentDidMount() {
        const url = `https://deckofcardsapi.com/api/deck/new/shuffle`;
        let response = await axios.get(url);
        let deckId = response.data.deck_id;
        this.setState({ deckId, remainingCards: response.data.remaining });
    }

    render() {
        return (
            <React.Fragment>
                {
                    this.state.isOutOfCards ?
                        <h1>No More Cards Left!</h1> :
                        <section>

                            <div>
                                {this.state.deckId}
                            </div>
                            <div>
                                <img src={this.state.currentDrawCardImage} alt={this.state.deckId} />
                            </div>
                            <button onClick={this.handleClick}>Draw a new card!</button>
                        </section>
                }
            </React.Fragment>
        );
    }
}

export default Deck;