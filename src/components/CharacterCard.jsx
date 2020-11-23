import React from "react";

function CharacterCard(props) {
  return (
    <div>
      <img src={props.img} alt="image" />
      <h1>{props.name}</h1>
      <h3>{props.species}</h3>
    </div>
  );
}

export default CharacterCard;
