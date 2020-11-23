import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CharacterCard(props) {
  return (
    <Link to={`/CharacterDetail/${props.id}`}>
      <img src={props.img} alt="image" />
      <h1>{props.name}</h1>
      <h3>{props.species}</h3>
    </Link>
  );
}

export default CharacterCard;
