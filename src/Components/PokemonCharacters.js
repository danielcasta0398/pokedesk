import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './Header';
import PokemonType from './PokemonType';

const PokemonCharacters = () => {

    const name = useSelector( state => state.userName )
    const [ searchPokemon, setSearchPokemon ] = useState("")

    return (
        <div className='welcom'>
            <Header /> 
            <div className="section-1">             
                <p><span className='span-red'>{`Welcome ${name},`}</span>here you can find you favorite pokemon</p>
                <div className="search">
                <form action="" >
                        <div className='input-search'>
                        <input 
                            type="text"                         
                            onChange={ e => setSearchPokemon(e.target.value) }
                            placeholder="Search Pokemon.."
                        />                      
                        <button>Search</button>   
                        </div>                                  
                    </form>
                    
                </div>
                
                <PokemonType typepokemon={searchPokemon} />
            </div>  

        </div>
    );
};

export default PokemonCharacters;