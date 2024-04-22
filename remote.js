const axios = require('axios');

// Define the URL you want to access
const url = 'http://host.docker.internal:5566';

// Make a GET request to the URL using Axios
axios.get(url)
  .then(response => {
    // Handle the successful response
    console.log('Response:', response.data);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });