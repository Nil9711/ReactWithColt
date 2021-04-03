import React, { Component } from 'react';

class Joke extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                {this.props.joke}
            </div>
        );
    }
}

export default Joke;