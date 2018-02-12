import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Grid from './Grid/Grid';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="main">
                <Navbar />
                <Grid />
            </div>
        );
    }
}

export default connect(null)(App);
