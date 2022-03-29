import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Prueba from './Prueba';

const PokemonType = () => {

    const [ types, setTypes ] = useState([])
    const [ page, setPage ] = useState(1)    
    const itemsNumber = 9        
    const lastIndex = page * itemsNumber
    const firstIndex = lastIndex - itemsNumber
    const pokemonPaginated = types.slice(firstIndex, lastIndex)
    const totalPages = Math.ceil(types?.length/itemsNumber)
    const pagesNumber = []
    for (let i = 1; i < totalPages; i++) {
        
        pagesNumber.push(i)
    }
 

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1120')
            .then( e => setTypes(e.data.results) )
    },[ page ] )

    return (
        <div className='section-pokemon-character' >
            {
               pokemonPaginated.map( type => (

                   <Link to="" key={type.url}>
                        <div className='card' >                   
                            <Prueba url={type.url} />                           
                        </div>
                   </Link>
                   
               ) )
            }

            <div>
                <button 
                    onClick={() => setPage( page - 1) }
                    disabled = {page <= 1}
                >Pagina Previa</button>

                 <div>
                    {
                        pagesNumber.map( pages => (
                            <button  key={pages} onClick={()=> setPage(pages)} >
                                 {pages} 
                            </button>
                        ) )
                    }
                 </div>  

                <button onClick={() => setPage( page + 1)} >Pagina Siguiente</button>                
            </div>
        </div>
    );
};

export default PokemonType;