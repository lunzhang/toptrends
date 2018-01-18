import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function mapStateToProps(state) {
  return {
    state,
  };
}

class Main extends Component {
  render() {
    return (
      <div id="main">
        HELLO WORLD
      </div>
    );
  }
}

export default connect(mapStateToProps)(Main);
