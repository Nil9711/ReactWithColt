import React, { Component } from 'react';
import ColorBox from '../ColorBox/ColorBox'

class Table extends Component {
    static defaultProps = {
        colorOptions: ['red', 'blue', 'black', 'green', 'aqua', 'brown', 'tomato', 'purple', 'pink']
    };

    setColor = () => {
        return this.props.colorOptions[Math.floor(Math.random() * this.props.colorOptions.length)]
    }

    render() {
        const colorBoxesArray = Array.from({ length: 45 });

        for (let i = 0; i < colorBoxesArray.length; i++) {
            colorBoxesArray[i] = {
                colorBox: <ColorBox key={i} colorOptions={this.props.colorOptions} color={this.setColor()} />
            }

        }

        return (

            <div>
                {colorBoxesArray.map((c) => c.colorBox)}
            </div>


        );
    }
}

export default Table;