import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Prueba = ( {url} ) => {

    const [ info, setInfo ] = useState({})
   
   
    useEffect( () => {
        axios.get(url)
        .then( e => setInfo(e.data) )
    },[ url ] )

    return (

        <Link to={`/description/${info.id}`}>
        <div className='img-card-pokemon'>
            <div>
                 <img src={info.sprites?.other["official-artwork"].front_default} alt="" />
                 <h1> {info.name} </h1>
                 <p> {info.types?.[0].type.name} </p>
            </div> 
                       
        </div>
        </Link>
        
    );
};

export default Prueba;