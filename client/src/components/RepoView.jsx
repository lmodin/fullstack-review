import React from 'react'

const RepoView = (prop) => {
  //console.log(prop.repo)
  let repo = prop.repo
  return (
    <tr id={prop.key} >
      <td ><a href={repo.url}>{repo.repo_name}</a></td>
      <td >{repo.username}</td>
      <td >{repo.stars}</td>
    </tr>
  )
}


export default RepoView;