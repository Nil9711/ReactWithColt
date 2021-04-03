import React, { Component } from 'react';
import axios from 'axios'
import Joke from '../Joke/Joke'
import { v4 as uuidv4 } from 'uuid';


class JokesTable extends Component {
    constructor(props) {
        super(props);
        this.state = { jokesList: [] }
        this.getJokes = this.getJokes.bind(this)
        this.upVote = this.upVote.bind(this)
        this.downVote = this.downVote.bind(this)
    }
    upVote() {

    }
    downVote() {

    }
    async getJokes() {
        for (let index = 0; index < 10; index++) {
            const url = `https://icanhazdadjoke.com/`;
            let response = await axios.get(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            let jokeGot = response.data.joke;
            this.setState({ jokesList: [...this.state.jokesList, jokeGot] })
        }
    }

    async componentDidMount() {
        this.getJokes()

    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.jokesList.map(joke =>
                        <li>
                            <Joke
                                joke={joke}
                                upVote={this.upVote}
                                downVote={this.downVote}
                                key={uuidv4()}
                            />
                        </li>)}
                </ul>
            </div>);
    }
}

export default JokesTable;