import React, {Component} from 'react';


class Topics extends Component {
  render() {

    return (
       <div>
      Super Special Recipe
      <ul>
        <li>1 cup Sugar</li>
        <li>1 cup pepper</li>
        <li>1 cup salt</li>
        <h2>{this.props.params.repoName}</h2>
      </ul>
    </div>

      )
  }
}

export default Topics;
