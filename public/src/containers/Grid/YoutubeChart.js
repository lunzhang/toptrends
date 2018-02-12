import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RaisedButton } from 'material-ui';
import { getChartData } from '../../actions';
import ChartContainer from './ChartContainer';
import TrendView from '../../components/TrendView';
import Calendar from '../../components/Calendar';
import styles from './Youtube.scss';

const chartType = 'Youtube';

const containerProps = {
    headertitle: 'Youtube Trends',
};

const mapStateToProps = (state) => ({
    data: state.chartsData[chartType]
});

class YoutubeChart extends Component {
    constructor(props) {
        super(props);

        this.setContainer = this.setContainer.bind(this);
        this.setView = this.setView.bind(this);

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        this.data = {
            selectedDate: today,
        };
        this.state = {
            contentContainer: null,
            currentView: 'Calendar',
        };
    }

    setContainer(container) {
        this.setState({contentContainer: container});
    }

    setView(view, date) {
        switch(view) {
            case 'Calendar':
                break;
            case 'TrendView':
                if (!date) date = this.data.selectedDate;
                else this.data.selectedDate = date;

                const localeDate = date.toLocaleDateString('en-US');

                if (!this.props.data || !this.props.data[localeDate]) {
                    this.props.getChartData(chartType, { date: localeDate });
                }
                break;
        }

        this.setState({
            currentView: view,
        });
    }

    render() {
        const { getChartData, ...chartProps } = this.props;

        return (
            <ChartContainer  { ...chartProps } { ...containerProps }>
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
                            <Calendar container={ this.state.contentContainer } setView={ this.setView }/>
                            :
                            <TrendView data={ this.props.data } date={ this.data.selectedDate }/>
                        }
                    </div>
                </div>
            </ChartContainer>
        );
    }
}

export default connect(mapStateToProps, { getChartData })(YoutubeChart);
