import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <div>
      <h1> "No se ha encontrado ningun personaje con ese nombre"</h1>
      <Link to="/">Inténtelo de nuevo</Link>
    </div>
  );
}

export default Error;
