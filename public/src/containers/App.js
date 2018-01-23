import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive, WidthProvider } from 'react-grid-layout';
import YoutubeChart from '../components/YoutubeChart';
import Navbar from '../components/Navbar';
import './App.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const mapStateToProps = function mapStateToProps(state) {
  return {
      charts: state.charts
  };
}

class App extends Component {
    constructor(props) {
        super(props);
    }

    buildChart(elem) {
        switch (elem.type) {
            case 'Youtube':
                return (
                    <YoutubeChart key={elem.key} data-grid={elem.grid}/>
                );
        }
    }

    render() {
        return (
            <div id="main">
                <Navbar />
                <ResponsiveReactGridLayout>
                    { this.props.charts.map(elem => this.buildChart(elem)) }
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
