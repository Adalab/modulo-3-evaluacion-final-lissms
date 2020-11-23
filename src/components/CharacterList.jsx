import React from "react";
import CharacterCard from "./CharacterCard";

function CharacterList(props) {
  const Character = props.characterList.map((character) => {
    return (
      <li key={character.id}>
        <CharacterCard img={character.image} name={character.name} species={character.species} />
      </li>
    );
  });

  return <div>{Character}</div>;
}

export default CharacterList;
