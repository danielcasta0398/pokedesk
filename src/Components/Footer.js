import React from 'react';
import elipse3 from '../assets/Ellipse 3.png'
import elipse4 from '../assets/Ellipse 4.png'

const Footer = () => {
    return (
        <footer>
        <div className='div-2' >                    
            
        </div>
        <div className='content-elipse'>
            <img className='elipse3' src={elipse3} alt="" />
        </div>
        <div className='content-elipse '>
            <img className='elipse4' src={elipse4} alt="" />
        </div>
        
    </footer>
    );
};

export default Footer;