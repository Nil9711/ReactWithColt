import React, { Component } from 'react';
import Dog from '../Dog/Dog';

class Dogs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        let dogsList = this.props.dogList;
        return (
            <div>
                {dogsList.map(dog => (<Dog key={dog.name} name={dog.src} />))}
            </div>
        );
    }
}

export default Dogs;
