const request = require('superagent');

const getCharacters = (page = 1) => {
  return request(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(res => {
      return Promise.all(res.body.results.map(character => {
        return getImage(character.image);
      }))
        .then(imageBuffers => {
          return res.body.results.map((character, i) => {
            return {
              name: character.name,
              status: character.status,
              species: character.species,
              image: imageBuffers[i]
            }
          })
        });
    });
};

const getImage = imageUrl => {
  return request(imageUrl)
    .then(res => {
      return res.body
    });
}

module.exports = {
  getCharacters,
  getImage
}
