const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
const Promise = require('bluebird');

Promise.promisifyAll(mongoose);

let repoSchema = mongoose.Schema({
  username: String,
  repo_name: {type: String, unique: true},
  url: String,
  stars: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repos) => {
  //iterate through the repos
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
    newRepo.save((err) => { if (err) {console.log('received error making document: ')} })
  }

}

var top25 = function() {
  //create a way to get the repos, and order by stars. return the top 25
  var query = Repo.find();
  query.sort({stars: 'desc'});
  query.limit(25);

  return query;
}

var clear = function() {
  Repo.collection.drop();
}

module.exports.save = save;
module.exports.top25 = top25;
module.exports.clear = clear;