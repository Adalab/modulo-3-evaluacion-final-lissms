import React from "react";
import CharacterCard from "./CharacterCard";
import "./CharacterList.scss";
import "../app.scss";

function CharacterList(props) {
  const Character = props.characterList.map((character) => {
    return (
      <li className="listElement" key={character.id}>
        <CharacterCard id={character.id} img={character.image} name={character.name} species={character.species} />
      </li>
    );
  });

  return <ul className="ul_list">{Character}</ul>;
}

export default CharacterList;
