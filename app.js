require('dotenv').config();

const axios = require('axios');


const apiKey = process.env.meaningcloud_API_KEY;


const meaningcloud = 'Your text here';


axios.post('https://api.meaningcloud.com', null, {
  params: {
    apiKey: apiKey,
    extractors: 'entities,topics',
    text: meaningcloud
  }
})
.then(response => {
  console.log('Analysis Result:', response.data);
})
.catch(error => {
  console.error('Error:', error);
});