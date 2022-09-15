import React from "react";

const Card = ({namesList}) => {
  

  return (
    <div>
      {
        namesList.map(({Name,Age,Adress}) => (
          <div className="cardMrapper" key={Name}>
          <div>Name:{Name}</div>
          <div>Age:{Age}</div>
          <div>Adress:{Adress}</div>
          </div>
        ))
      }
    </div>  
  )
               
      };


export default Card;