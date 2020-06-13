import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  componentDidMount() {
    //fetch top 25 repos
    this.updateRepos();
  }

  updateRepos() {
    fetch("http://localhost:1128/repos")
    .then(res => (res.json()))
    .then((repos) => {
      console.log('Im trying to set the state: ', repos)
      this.setState({
        repos: repos
      }, () => (console.log('updated state: ', this.state.repos)));
      //console.log(this.state.repos)
    })
    .catch(err => console.log(err))

  }

  search (term) {
    console.log(`${term} was searched`);
    //post request w/ term
    fetch("http://localhost:1128/repos", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "term": term
      })
    })
      .then((res) => {
        this.updateRepos()
      })
      .catch((err) => {
        console.log('error: ', err)
      })
  }


  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));