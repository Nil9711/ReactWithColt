import React, { Component } from 'react';
import './Pokecard.css'
class PokeCard extends Component {
    render() {
        let props = this.props;
        return (
            <div className="Pokecard" >
                <h2>
                    {props.name}
                </h2>
                <p>
                    Type : {props.type}
                </p>
                <p>
                    Exp : {props.exp}
                </p>
                <img src={props.img} alt={props.name} />

            </div>
        );
    }
}

export default PokeCard;