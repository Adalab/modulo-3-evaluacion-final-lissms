import React, { useEffect, useState } from "react";
import api from "./service/api";
import Filters from "./components/Filters";
import CharacterList from "./components/CharacterList";
import CharacterDetail from "./components/CharacterDetail";
import { Switch, Route } from "react-router-dom";

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
      <Switch>
        <Route exact path="/">
          <Filters getFilteredCaracterValue={getFilteredCaracterValue} />
          <CharacterList characterList={newFiltededList} />
        </Route>
        <Route exact path="/CharacterDetail/:id">
          <CharacterDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
