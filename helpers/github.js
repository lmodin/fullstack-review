const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (searchTerm) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API
  axios.get(`https://api.github.com/users/${searchTerm}/`)
    .then((res) => {
      console.log(res)
    })

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'FILL ME IN',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

}

module.exports.getReposByUsername = getReposByUsername;