import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Grid from './Grid';
import './App.scss';

const ChartTypes = [{
    chartType: 'Youtube',
    grid: {x: 0, y: 0, w: 5, h: 2}
}];

class App extends Component {
    render() {
        return (
            <div id="main">
                <Navbar chartTypes={ ChartTypes }/>
                <Grid />
            </div>
        );
    }
}

export default connect()(App);
