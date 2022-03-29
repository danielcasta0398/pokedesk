import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from './Header';

const PokemonDescription = () => {

    const {id} = useParams()
    const [ pokemon, setPokemon ] = useState({})

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
         .then( e => setPokemon(e.data) )
    },[ id ] )

    return (
        <div>
            <Header />
          <div className="section-description">
           <img src={pokemon.sprites?.other["official-artwork"].front_default} alt="" />
                     
          </div> 
          <h1> {pokemon.name} </h1>     
           
        </div>
    );
};

export default PokemonDescription;