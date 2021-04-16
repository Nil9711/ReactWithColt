import React, { Component } from 'react';
import { getDogsList } from '../DogsList'

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = { dog: [{ name: "", age: "", fact: [] }] }
        this.getDogInfo = this.getDogInfo.bind(this)
    }

    getDogInfo() {
        let dogsList = getDogsList();
        let dogToRender = { name: "", age: "", fact: [] };
        for (let i = 0; i < dogsList.length; i++) {
            if (this.props.name === dogsList[i].src) {
                dogToRender = { name: dogsList[i].name, age: dogsList[i].age, fact: dogsList[i].facts[0] };
                this.setState({ dog: dogToRender })
            }
        }

    }
    componentDidMount() {
        this.getDogInfo();
    }
    componentDidUpdate(prevProps) {
        if (prevProps.name !== this.props.name) {
            this.getDogInfo();
        }
    }

    render() {
        return (
            <div>
                <h3>Name : {this.state.dog.name}</h3>
                <h4>Age : {this.state.dog.age}</h4>
                <h5>Fact : {this.state.dog.fact}</h5>
            </div>
        );
    }
}

export default Dog;
