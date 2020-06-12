import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
    //console.log(this.props)
    this.onChange = this.onChange.bind(this)

  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    //console.log(this)
    this.props.onSearch(this.state.term);
  }

  //changed onchange.bind(this), fixed issue while typing
  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input value={this.state.term} onChange={this.onChange}/>
      <button onClick={this.search.bind(this)}> Add Repos </button>
    </div>)
  }
}

export default Search;