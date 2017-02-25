import React, {Component} from 'react';


class Topics extends Component {

  onTopicClick() {
    console.log('clicked')
  }
  render() {
    return (
     <div>
      <ul>
        <li onClick={this.onTopicClick.bind(this)}>基金</li>
        <li>理财</li>
        <li>银行</li>
        <li>保险</li>
      </ul>
    </div>
    );
  }
}

export default Topics;
