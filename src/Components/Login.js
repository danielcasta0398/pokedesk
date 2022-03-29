import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import imagenLogin from '../assets/image 11.png'
import Footer from './Footer';

const Login = () => {

    const [ name, setName ] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate()
  
    const submit = e =>{
        e.preventDefault();

        console.log(name)
        dispatch({ 
            type: "GET_USERNAME", 
            payload: name
        })

        navigate('/characters')

    }

    return (
        <div className='pokemon-home'>
           
            <div className="img-pokemon">
                <img  src={imagenLogin} alt="" />
                <h1>¡Hello Trainer!</h1>
                <p>Give me your name to start</p>
                <form  className='search' action="" onSubmit={submit}>
                    <div className='input-home'>
                        <input 
                            type="text" 
                            value={name}
                            onChange={ e => setName(e.target.value)}
                            placeholder="Your Name.."
                        />                      
                        <button>START</button>   
                    </div>                                  
                </form>
                
                <Footer />

            </div>
        </div>
    );
};

export default Login;