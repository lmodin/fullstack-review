import React from 'react';
import RepoView from './RepoView.jsx';

const RepoList = (props) => {
  //console.log('RepoList repos: ', props.repos)
  return (
    <div>
      <h4> Top {props.repos.length} Repos </h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>User</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {props.repos.map(repo => (
            <RepoView repo={repo} key={repo.name}/>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RepoList;