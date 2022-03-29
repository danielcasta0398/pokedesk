import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

    const lsIndex = page + itemsNumber
    const firsIndex = page -1
    
    const pokepag = pagesNumber.slice(firsIndex , lsIndex)
 

    useEffect( () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1120')
            .then( e => setTypes(e.data.results) )
    },[ page ] )

    

    return (
        <div className='section-pokemon-character' >
            {
               pokemonPaginated.map( type => (

                  
                        <div className='card' key={type.url} >                   
                            <Prueba url={type.url} />                           
                        </div>                                             
                  
                   
               ) )
            }

            <div className="pagination">
                <button 
                    onClick={() => setPage( page - 1) }
                    disabled = {page <= 1}
                >Pagina Previa</button>

                 <div className="buttons-pages">
                    {
                        pokepag.map( pages => (                               
                            
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