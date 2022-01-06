import React from 'react';
import './Contact.css';

function Contact() {
   return (
      <div>
        
         <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <i className="fas fa-map-marker-alt"></i>
                     <div className="topic">Address</div>
          <div className="text-one"> Michael Paul @ Instant </div>
          <div className="text-two">ABCD INSTANT 06</div>
        </div>
        <div className="phone details">
          <i className="fas fa-phone-alt"></i>
          <div className="topic">Phone</div>
          <div className="text-one">+1234  5647</div>
          <div className="text-two">+1234  5678</div>
        </div>
        <div className="email details">
          <i className="fas fa-envelope"></i>
          <div className="topic">Email</div>
          <div className="text-one">abc@gmail.com</div>
          <div className="text-two">instant@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <h2> Contact Us </h2>
        <p>Please send us your valuable messsage or suggestions. </p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box">
          
        </div>
        <div className="button">
          <input type="submit" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>

      </div>
   )
}

export default Contact
