const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  // localhost:3001/rickandmorty/onsearch/1
  const { id } = req.params;
  try {
    const response = await axios.get(URL + id);
    const character = {
      id: response.data.id,
      name: response.data.name,
      image: response.data.image,
      gender: response.data.gender,
      species: response.data.species,
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getCharById };
