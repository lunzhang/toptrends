import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Grid from './Grid';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div id="main">
                <Navbar />
                <Grid />
            </div>
        );
    }
}

export default connect()(App);
