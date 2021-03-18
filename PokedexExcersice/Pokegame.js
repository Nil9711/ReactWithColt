import React, { Component } from 'react';
import Pokedex from './Pokedex'
import { randomPokemons } from './Pokemons'
class Pokegame extends Component {

    // recieves 8 pokemons , randomly divides to 4v4 then determing a winner hand!
    render() {

        const pokemonsList = randomPokemons();
        // hand 1
        const handOne = [];
        let handOneTotalExp = 0;
        for (let i = 0; i < pokemonsList.length / 2; i++) {
            handOne.push(pokemonsList[i])
            handOneTotalExp += pokemonsList[i].base_experience;
        }
        // hand 2 
        let handTwoTotalExp = 0;
        const handTwo = [];
        for (let i = 3; i < pokemonsList.length - 1; i++) {
            handTwo.push(pokemonsList[i])
            handTwoTotalExp += pokemonsList[i].base_experience;

        }

        return (
            <div>
                {handOneTotalExp > handTwoTotalExp ?
                    <div>
                        Winner Is : <Pokedex team={handOne} totalExp={handOneTotalExp} />
                        With total of {handOneTotalExp} exp! <br />
                        Loser Is : <Pokedex team={handTwo} totalExp={handTwoTotalExp} />
                        With total of {handTwoTotalExp} exp!
                    </div>
                    :
                    <div>
                        Winner Is : <Pokedex team={handTwo} totalExp={handTwoTotalExp} />
                        With total of {handTwoTotalExp} exp! <br />
                        Loser Is : <Pokedex team={handOne} totalExp={handOneTotalExp} />
                        With total of {handOneTotalExp} exp!

                    </div>
                }

            </div>
        );
    }
}

export default Pokegame;