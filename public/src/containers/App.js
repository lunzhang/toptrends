import React, { Component } from 'react';
import { connect } from 'react-redux';
import YoutubeChart from '../components/YoutubeChart';
import { Responsive, WidthProvider } from 'react-grid-layout';
import { AppBar} from 'material-ui';
import styles from './app.scss';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const mapStateToProps = function mapStateToProps(state) {
  return {

  };
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            charts: [{
                type: 'Youtube',
                key: 1,
                grid: {x: 0, y: 0, w: 5, h: 2}
            },{
                type: 'Youtube',
                key: 2,
                grid: {x: 0, y: 0, w: 5, h: 2}
            }]
        };
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
                <AppBar showMenuIconButton={false} title="Top Trends" className={styles.navbar}
                position="static" color="default">
                </AppBar>
                <ResponsiveReactGridLayout>
                    { this.state.charts.map(elem => this.buildChart(elem)) }
                </ResponsiveReactGridLayout>
            </div>
        );
    }
}

export default connect(mapStateToProps)(App);
