const request = require('request');

const searchUrl = 'https://api.thecatapi.com/v1/breeds/search?q=';
const breed = process.argv[2];
const inputUrl = searchUrl + breed;

request(inputUrl, (error, response, body) => {
  if (error) {
    console.log(`ERROR! Request failed.\n`, error);
    return;
  }

  const data = JSON.parse(body);
  if (!data[0]) {
    console.log(`MRROW?!? Breed not found. Please try again meow.`);
    return;
  }

  console.log(data[0].description);
});