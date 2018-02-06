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

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        this.state = {
            contentContainer: null,
            selectedDate: today,
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

    setView(view) {
        this.setState({
            currentView: view
        });
    }

    render() {
        return (
            <ChartContainer  { ...this.props } { ...containerProps }>
                <div className={ styles.chartContent } ref={ this.setContainer }>
                    {
                        this.state.currentView === 'Calendar' ?
                        <button type="button" className="btn btn-primary"
                            onClick={() => this.setView('TrendView')}> Trend </button>
                        :
                        <button className={ styles.chartNavBtn }
                            onClick={() => this.setView('Calendar')}> Back </button>
                    }
                    <div>
                        {
                            this.state.currentView === 'Calendar' ?
                            <Calendar container={ this.state.contentContainer } onDateSelect={ this.onDateSelect }/>
                            :
                            <TrendView data={ this.props.data } date={ this.state.selectedDate }/>
                        }
                    </div>
                </div>
            </ChartContainer>
        );
    }
}

export default connect(mapStateToProps, null)(YoutubeChart);
