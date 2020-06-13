const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird');

Promise.promisifyAll(require("mongoose"));

let repoSchema = mongoose.Schema({
  username: String,
  repo_name: String,
  url: String,
  stars: Number //stargazer_count
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  //iterate through the reposs
  for (var i = 0; i < repos.length; i++) {
    //create an object for each one by abstracting name, repo, url, stargazer count
    var makeRepo = {
      username: repos[i].owner.login,
      repo_name: repos[i].name,
      url: repos[i].html_url,
      stars: repos[i].stargazers_count
    }
    //make a new Repo
    var newRepo = new Repo(makeRepo);
    newRepo.save((err) => { console.log('received error making document: ', err) })
  }

}

module.exports.save = save;