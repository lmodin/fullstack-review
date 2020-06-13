const express = require('express');
const Promise = require('bluebird');
const Cors = require('cors');
const bodyParser = require('body-parser');
let getRepo = require('../helpers/github.js');
let db = require('../database/index.js');

let app = express();

app.use(Cors());
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

Promise.promisifyAll(require("mongoose"));

//a test array of repos to make sure the connection to client is working
var repos = ['a repo', 'another repo', 'a third repo']


app.post('/repos', function (req, res) {
  getRepo.getReposByUsername(req.body.term)
    .then(data => {
      //send the response over to the save function in database
      db.save(data.data);
      res.end()
    })
    .catch((err) => {console.log('post request didnt work')})

});

app.get('/repos', function (req, res) {
  //This route should send back the top 25 repos
  db.top25()
    .then((repos) => {res.send(repos)});

});

app.delete('/repos', function(req, res) {
  db.clear()

  res.send('cleared')
})

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

