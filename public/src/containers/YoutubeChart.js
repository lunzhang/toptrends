import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChartContainer from './ChartContainer';
import Calendar from '../components/Calendar';
import styles from './Youtube.scss';

const containerProps = {
    headertitle: 'Youtube Trends',
};

const mapStateToProps = (state) => ({
    data: state.chartsData['Youtube']
});

class YoutubeChart extends Component{
    render() {
        return (
            <ChartContainer  { ...this.props } { ...containerProps }>
                <div className={ styles.chartContent } ref={ (content) => { this.contentContainer = content} }>
                    <Calendar container={ this.contentContainer } data={ this.props.data }/>
                </div>
            </ChartContainer>
        );
    }
}

export default connect(mapStateToProps, null)(YoutubeChart);
