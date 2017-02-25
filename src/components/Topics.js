import React, {Component} from 'react';
import { connect } from 'react-redux';

class Topics extends Component {
  rendedFilter(topic) {
    debugger
    return (
      <div>
      </div>
    );
  }
  render() {
    return (
      <div>
        <ul>
          TO DO
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { filters } = state.newsList;
  return {
    filters,
  };
};

export default connect(mapStateToProps, null)(Topics);
