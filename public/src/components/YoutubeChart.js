import ChartContainer from './ChartContainer';
import React, { Component } from 'react';

const containerProps = {
    headertitle: 'Youtube Trends',
};

export default class YoutubeChart extends Component{
    render() {
        return (
            <ChartContainer  {...this.props} {...containerProps} >
            </ChartContainer>
        );
    }
}
