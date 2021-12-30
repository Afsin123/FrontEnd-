import React from 'react';
import photo from '../images/bannerimg.jpg';
import './Banner.css';

function Banner() {
   return (
      <div className='banners'>
         <img src={photo} />
         <div className='textintro'> 
         <div className='line1'>HELLO PEOPLE, MY NAME IS </div>
         <h1> PAUL SILVA </h1>
         <div className='line1'>WEB DESIGNER, DEVELOPER  </div>
         </div>
      </div>

   )
}

export default Banner;
