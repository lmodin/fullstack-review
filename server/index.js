const express = require('express');
const Promise = require('bluebird')
const Cors = require('cors');
const bodyParser = require('body-parser');

let app = express();

app.use(Cors());
app.use(express.static(__dirname + '/../client/dist'));
//content type: application json
app.use(bodyParser.json());

Promise.promisifyAll(require("mongoose"));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  console.log(req.body)
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  res.send('good job')
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  console.log('I got a thing! ', req.body)
  var repos = ['a repo', 'another repo', 'a third repo']
  // This route should send back the top 25 repos
  res.send(repos)
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

