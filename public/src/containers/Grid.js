import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive, WidthProvider } from 'react-grid-layout';
import YoutubeChart from '../components/YoutubeChart';
import { deleteChart } from '../actions';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const mapStateToProps = (state) => ({
    charts: state.charts
});

class Grid extends Component {
    buildChart(elem) {
        switch (elem.type) {
            case 'Youtube':
                return (
                    <YoutubeChart id={elem.key} key={elem.key} data-grid={elem.grid} deleteChart={this.props.deleteChart}/>
                );
        }
    }

    render() {
        return(
            <ResponsiveReactGridLayout>
                { this.props.charts.map(elem => this.buildChart(elem)) }
            </ResponsiveReactGridLayout>
        );
    }
}

export default connect(mapStateToProps, { deleteChart })(Grid);
