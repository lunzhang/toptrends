import ChartContainer from './ChartContainer';
import React, { Component } from 'react';
import styles from './Youtube.scss';

const containerProps = {
    headertitle: 'Youtube Trends',
};

export default class YoutubeChart extends Component{
    render() {
        const trends = this.props.data;

        return (
            <ChartContainer  { ...this.props } { ...containerProps } >
                <div className={ styles.chartContent }>
                    {
                        Object.keys(trends).map((date) => (
                            trends[date].map((trend, index) => (
                                <div className={ styles.trend }>
                                    <a key={ date + index }  href={trend.link}>
                                        { trend.trend }
                                    </a>
                                </div>
                            ))
                        ))
                    }
                </div>
            </ChartContainer>
        );
    }
}
