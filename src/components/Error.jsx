import PropTypes from "prop-types";
import React from "react";
import "./Error.scss";

function Error(props) {
  const handleClick = () => {
    props.setFilteredCard("");
  };

  return (
    <div className="message">
      <h1> "No se ha encontrado ningun personaje con ese nombre"</h1>
      <div className="errorButton" onClick={handleClick}>
        Inténtelo de nuevo
      </div>
    </div>
  );
}

Error.propTypes = {
  setFilteredCard: PropTypes.func,
};

export default Error;
