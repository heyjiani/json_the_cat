const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const searchUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
  const inputUrl = searchUrl + breedName;

  request(inputUrl, (error, response, body) => {
    if (error) return callback(error, null);

    const data = JSON.parse(body);
    if (!data[0]) {
      error = `MRROW?!? Breed not found`;
      return callback(error, null);
    }
    
    return callback(null, data[0].description);
  });
};

module.exports = {
  fetchBreedDescription
};