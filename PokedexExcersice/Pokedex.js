import Pokecard from './Pokecard'
import React, { Component } from 'react';
import { getImg } from './Pokemons'


class Pokedex extends Component {
    render() {
        let props = this.props;

        const renderedTeam = props.team.map((pokemon) =>
            <Pokecard
                key={pokemon.id}
                name={pokemon.name}
                type={pokemon.type}
                exp={pokemon.base_experience}
                img={getImg(pokemon.id)}
            />
        );
        return (
            <div>
                {renderedTeam}
            </div>

        );
    }
}

export default Pokedex;