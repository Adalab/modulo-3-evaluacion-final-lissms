const getDataFromApi = () => {
  return fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    });
};
const getCharacterFromApi = (id) => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        image: data.image,
        name: data.name,
        status: data.status,
        species: data.species,
        origin: data.origin.name,
        episode: data.episode.length,
      };
    });
};

export default {
  getDataFromApi,
  getCharacterFromApi,
};
