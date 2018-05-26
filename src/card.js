import React from "react";
const imageStyle = {
  width: "130px",
  height: "130px",
  maxWidth: "130px",
  maxHeight: "130px",
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
