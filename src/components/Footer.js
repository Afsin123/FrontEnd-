import React from 'react';
import './Footer.css';
import 'font-awesome/css/font-awesome.min.css'; 


function Footer() {
   return (
      <div className='footers'>
         <div className='icons'>
            <div className="row">
               <div className="col-2">   <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id=">
                            <i className="fa fa-facebook-f"></i>
                        </a> </div>
               <div className="col-2"><a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
                            <i className="fa fa-twitter"></i>
                        </a> </div>
               <div className="col-2"> <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/">
                            <i className="fa fa-instagram"></i>
                        </a> </div>
               <div className="col-2"> <a className="btn btn-social-icon btn-google" href="http://youtube.com/">
                            <i className="fa fa-youtube"></i>
                        </a> </div>
               <div className="col-2"> <a className="btn btn-social-icon btn-vk" href="http://vk.com/">
                            <i className="fa fa-vk"></i>
                        </a> </div>
               <div className="col-2"> <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"> 
                            <i className="fa fa-linkedin"></i>
                        </a>  </div>
          </div>
         </div>
         <div className='copyright'>
            <div className="row1">
               <p> Ⓒ Copyrights <span> Instant</span> All rights reserved.</p>
               <p> Created with instant template </p>
               </div>
         </div>
      </div>
   )
}

export default Footer
