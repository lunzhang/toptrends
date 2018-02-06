import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartContainer from './ChartContainer';
import TrendView from '../../components/TrendView';
import Calendar from '../../components/Calendar';
import styles from './Youtube.scss';

const containerProps = {
    headertitle: 'Youtube Trends',
};

const mapStateToProps = (state) => ({
    data: state.chartsData['Youtube']
});

class YoutubeChart extends Component {
    constructor(props) {
        super(props);
        this.setContainer = this.setContainer.bind(this);
        this.onDateSelect = this.onDateSelect.bind(this);
        this.state = {
            contentContainer: null,
            selectedDate: null,
            currentView: 'Calendar',
        };
    }

    setContainer(container) {
        this.setState({contentContainer: container});
    }

    onDateSelect(date) {
        this.setState({
            selectedDate: date,
            currentView: 'TrendView',
        });
    }

    render() {
        return (
            <ChartContainer  { ...this.props } { ...containerProps }>
                <div className={ styles.chartContent } ref={ this.setContainer }>
                    {
                        this.state.currentView === 'Calendar' ?
                        <Calendar container={ this.state.contentContainer } onDateSelect={ this.onDateSelect }/>
                        :
                        <TrendView data={ this.props.data } date={ this.state.selectedDate }/>
                    }
                </div>
            </ChartContainer>
        );
    }
}

export default connect(mapStateToProps, null)(YoutubeChart);
