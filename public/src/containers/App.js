import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = function mapStateToProps(state) {
  return {
    state,
  };
}

class App extends Component {
  render() {
    return (
      <div id="main">

      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
