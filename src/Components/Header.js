import React from 'react';
import rectangleRed from '../assets/Rectangle 147.png'
import rectangleBlack from '../assets/Rectangle 148.png'
import elipse2 from '../assets/Ellipse 4.png'
import logo from '../assets/image 11.png'

const Header = () => {
    return (
        <div>
            <div className='header'>

               <img className='logo-header' src={logo} alt="" />     

                <img className='rectangle-red' src={rectangleRed} alt="" />
                <div>
                    <img  className='rectangle-black' src={rectangleBlack} alt="" />                    
                </div>
                <div className='prueba' >

                    <div className="elipse">
                    <img src={elipse2} alt="" /> 
                    </div>                 
                     
                                    
                </div>
                 
            </div>
            
            
        </div>
    );
};

export default Header;