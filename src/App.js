import React, { useEffect, useState } from "react";
import api from "./service/api";
import Filters from "./components/Filters";
import Error from "./components/Error";
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
          <Filters value={filteredCard} getFilteredCaracterValue={getFilteredCaracterValue} />
          {newFiltededList.length > 0 ? <CharacterList characterList={newFiltededList} /> : <Error />}
        </Route>
        <Route exact path="/CharacterDetail/:id">
          <CharacterDetail />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
