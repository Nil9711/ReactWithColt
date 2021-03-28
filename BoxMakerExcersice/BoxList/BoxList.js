import React, { Component } from 'react';
import NewBoxForm from '../NewBoxForm/NewBoxForm'
import Box from '../Box/Box'
import { v4 as uuidv4 } from 'uuid';


class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                { backgroundColor: "black", width: "10px", height: "10px", id: uuidv4() }
            ]
        };
        this.addNewBox = this.addNewBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }

    addNewBox(color, width, height) {
        let box = { backgroundColor: color, width: width, height: height }
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }))
    }

    deleteBox(id) {
        this.setState({ boxes: this.state.boxes.filter(box => id) })
    }
    render() {

        return (

            <React.Fragment>
                {this.state.boxes.map(box => (
                    <Box
                        backgroundColor={box.backgroundColor}
                        width={box.width}
                        height={box.height}
                        key={uuidv4()}
                        deleteBox={this.deleteBox}
                    />
                ))}

                <NewBoxForm addNewBox={this.addNewBox} />
            </React.Fragment>
        );
    }
}

export default BoxList;