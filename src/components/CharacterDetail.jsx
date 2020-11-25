import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../service/api";
import { Link } from "react-router-dom";
import "./CharacterDetail.scss";

function CharacterDetail() {
  let myObjetParam = useParams();

  const [caracterDatails, setCharacterDetail] = useState({});

  useEffect(() => {
    api.getCharacterFromApi(myObjetParam.id).then((data) => {
      setCharacterDetail(data);
    });
  }, []);

  return (
    <div className="caracterDetail-container">
      <div className="caracterDatails">
        <img className="caracterDatails__img" src={caracterDatails.image} alt="image" />
        <div className="caracterDatails__data">
          <h1 className="caracterDatails__name">{caracterDatails.name}</h1>
          <h5 className="caracterDatails__status">{`Status: ${caracterDatails.status}`}</h5>
          <h5 className="caracterDatails__species">{`Species: ${caracterDatails.species}`}</h5>
          <h5 className="caracterDatails__origin">{`Origin: ${caracterDatails.origin}`}</h5>
          <h5 className="caracterDatails__episode">{`Episode: ${caracterDatails.episode}`}</h5>
          <div className="caracterDatails__link">
            <Link className="caracterDatails__link--back" to="/">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetail;
