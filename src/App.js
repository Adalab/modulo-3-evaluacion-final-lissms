import React, { useEffect, useState } from "react";
import api from "./service/api";
import Filters from "./components/Filters";
import CharacterList from "./components/CharacterList";

const App = () => {
  //destructuring
  const [characterList, setCharacterList] = useState([]);
  const [filteredCard, setFilteredCard] = useState("");

  //api
  useEffect(() => {
    api.getDataFromApi().then((data) => {
      setCharacterList(data);
    });
  }, []);

  const getFilteredCaracterValue = (value) => {
    setFilteredCard(value);
  };

  const newFiltededList = characterList.filter((card) => {
    return card.name.toLowerCase().includes(filteredCard.toLowerCase());
  });

  return (
    <div>
      <Filters getFilteredCaracterValue={getFilteredCaracterValue} />
      <CharacterList characterList={newFiltededList} />
    </div>
  );
};

export default App;
