import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Img from "../images/bent.png";
import Img1 from "../images/vintage.png";
import Img3 from "../images/free.jpg";
import "./Cards.css";

function Cards() {
  return (
    //      <div class="container">
    //         <h2> My Portfolio </h2>
    //    <div class="row">
    //            <div class="col-card"> <img src={Img1 }/></div>
    //        <div class="col-card"> <img src={Img1 } /> </div>
    //        <div class="col-card"> <img src={Img1 }/> </div>
    //    </div>
    //    <div class="row">
    //        <div class="col-card"> <img src={Img1 }/> </div>
    //        <div class="col-card"> <img src={Img1 }/> </div>
    //        <div class="col-card"><img src={Img1 }/> </div>
    //    </div>
    // </div>
     
        
     <div class="cards">
        
      <div class="card">
        <img class="card__image" src={Img1} alt="" />
      </div>
      <div class="card">
        <img class="card__image" src={Img1} alt="" />
      </div>

      <div class="card">
        <img class="card__image" src={Img1} alt="" />
      </div>
      <div class="card">
        <img class="card__image" src={Img1} alt="" />
      </div>
      <div class="card">
        <img class="card__image" src={Img1} alt="" />
      </div>
      <div class="card">
        <img class="card__image" src={Img1} alt="" />
      </div>
        </div>
        
  );
}

export default Cards;
