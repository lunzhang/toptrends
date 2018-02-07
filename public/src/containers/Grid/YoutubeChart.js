import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
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
                    <div className={ styles.navbar }>
                        {
                            this.state.currentView === 'Calendar' ?
                            <RaisedButton className="trend-btn" label="Trend" primary={ true }
                                onClick={() => this.setView('TrendView')} />
                            :
                            <RaisedButton label="Back" secondary={ true }
                                onClick={() => this.setView('Calendar')} />
                        }
                    </div>

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
