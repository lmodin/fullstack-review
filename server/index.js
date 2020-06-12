const express = require('express');
const Promise = require('bluebird')
const Cors = require('cors');
const bodyParser = require('body-parser');
let getReposByUsername = require('../helpers/github.js')

let app = express();

app.use(Cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

Promise.promisifyAll(require("mongoose"));

//a test array of repos to make sure the connection to client is working
var repos = ['a repo', 'another repo', 'a third repo']


app.post('/repos', function (req, res) {
  // TODO - your code here!
  getReposByUsername(req.body.term)
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database


  //testing with the test array
  repos.push(req.body.term)
  res.send(200)
});

app.get('/repos', function (req, res) {
  // TODO - your code here!

  // This route should send back the top 25 repos
  res.send(repos)
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

