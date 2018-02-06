import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Responsive, WidthProvider } from 'react-grid-layout';
import YoutubeChart from './YoutubeChart';
import styles from './Grid.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);
const mapStateToProps = (state) => ({
    gridCharts: state.gridCharts,
});

class Grid extends Component {
    buildChart(elem) {
        switch (elem.chartType) {
            case 'Youtube':
                return (
                    <YoutubeChart id={elem.key} key={elem.key} data-grid={elem.grid} />
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

export default connect(mapStateToProps, null)(Grid);
