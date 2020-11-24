import React from "react";
import { Link } from "react-router-dom";
import "./Error.scss";

function Error(props) {
  return (
    <div className="message">
      <h1> "No se ha encontrado ningun personaje con ese nombre"</h1>
      <Link className="message__link" to="/">
        Inténtelo de nuevo
      </Link>
    </div>
  );
}

export default Error;
