import React from "react";

const Card = props => {
  return (
    <div onClick={() => props.onCardClick(props.name)}>
      <img src={props.image} alt="pic" />
    </div>
  );
};

export default Card;
