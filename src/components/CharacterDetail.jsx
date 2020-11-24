import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import { Link } from "react-router-dom";

function CharacterDetail(props) {
  let myObjetParam = useParams();

  const [caracterDatails, setCharacterDetail] = useState({});

  useEffect(() => {
    api.getCharacterFromApi(myObjetParam.id).then((data) => {
      setCharacterDetail(data);
    });
  }, []);

  return (
    <div>
      <img src={caracterDatails.image} alt="image" />
      <h1>{caracterDatails.name}</h1>
      <h5>{caracterDatails.status}</h5>
      <h5>{caracterDatails.species}</h5>
      <h5>{caracterDatails.origin}</h5>
      <h5>{caracterDatails.episode}</h5>
      <Link to="/">Volver</Link>
    </div>
  );
}

export default CharacterDetail;
