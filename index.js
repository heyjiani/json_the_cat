const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log(`ERROR! Request failed:\n`, error);
    return;
  }
  console.log(desc);
});