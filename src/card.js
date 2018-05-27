import React from "react";
const imageStyle = {
  width: "180px",
  height: "180px",
  maxWidth: "180px",
  maxHeight: "180px",
  display: "block",
  margin: "0 auto"
};
const Card = props => {
  return (
    <div onClick={() => props.onCardClick(props.name)}>
      <img style={imageStyle} src={props.image} alt="pic" />
    </div>
  );
};

export default Card;
