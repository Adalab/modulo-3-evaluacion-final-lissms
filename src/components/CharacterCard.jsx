import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../app.scss";
import "./CharacterCard.scss";

function CharacterCard(props) {
  return (
    <div className="card">
      <img src={props.img} alt="image" className="card__img" />
      <h1 className="card__name">{props.name}</h1>
      <p className="card__species">{props.species}</p>
      <div className="card__button">
        <Link to={`/CharacterDetail/${props.id}`} className="card__linkclass ">
          Más detalles
        </Link>
      </div>
    </div>
  );
}

CharacterCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  spacies: PropTypes.string,
  id: PropTypes.number,
};

export default CharacterCard;
