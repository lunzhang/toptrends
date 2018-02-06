import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Grid from './Grid/Grid';
import { getChartData } from '../actions';

const ChartTypes = [{
    chartType: 'Youtube',
    grid: {x: 0, y: 0, w: 4, h: 4}
}];

class App extends Component {
    constructor(props) {
        super(props);
        ChartTypes.forEach((chart) => {
            this.props.getChartData(chart.chartType);
        });
    }

    render() {
        return (
            <div id="main">
                <Navbar chartTypes={ ChartTypes }/>
                <Grid />
            </div>
        );
    }
}

export default connect(null, { getChartData })(App);
