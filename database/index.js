const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  /*
  Things I want:
    -Id (automagically happens)
    -username (from owner[login] in data)
    -reponame (from name in data)
    -url (from html_url in data)
    -stars (from stargazer_count)
  */

  username: String,
  repo_name: String,
  url: String,
  stars: Number //stargazer_count

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/*something*/) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;