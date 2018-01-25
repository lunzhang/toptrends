import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive, WidthProvider } from 'react-grid-layout';
import YoutubeChart from '../components/YoutubeChart';
import { deleteChart } from '../actions';
import styles from './Grid.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const mapStateToProps = (state) => ({
    gridCharts: state.gridCharts,
    chartsData: state.chartsData
});

class Grid extends Component {
    buildChart(elem) {
        const data = this.props.chartsData[elem.chartType] ? this.props.chartsData[elem.chartType] : {};

        switch (elem.chartType) {
            case 'Youtube':
                return (
                    <YoutubeChart id={elem.key} key={elem.key} data-grid={elem.grid}
                    deleteChart={this.props.deleteChart} data={data}/>
                );
        }
    }

    render() {
        return(
            <ResponsiveReactGridLayout className={ styles.reactGridStyle }>
                { this.props.gridCharts.map(elem => this.buildChart(elem)) }
            </ResponsiveReactGridLayout>
        );
    }
}

export default connect(mapStateToProps, { deleteChart })(Grid);
