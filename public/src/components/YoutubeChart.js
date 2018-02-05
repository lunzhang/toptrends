import React, { Component } from 'react';
import ChartContainer from './ChartContainer';
import styles from './Youtube.scss';
import Calendar from './Calendar';

const containerProps = {
    headertitle: 'Youtube Trends',
};

export default class YoutubeChart extends Component{
    render() {
        const trends = this.props.data;

        return (
            <ChartContainer  { ...this.props } { ...containerProps } >
                <div className={ styles.chartContent } ref={(content) => { this.contentContainer = content}}>
                    <Calendar container={ this.contentContainer }/>
                </div>
            </ChartContainer>
        );
    }
}
