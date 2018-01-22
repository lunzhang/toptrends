import React, { Component } from 'react';

const containerStyle = {
    border: '1px solid black',
};

const headerStyle = {
    borderBottom: '1px solid black',
    padding: '10px',
    cursor: 'pointer'
};

export default class ChartContainer extends Component {
    render() {
        return (
            <div style={Object.assign({},containerStyle, this.props.style)}>
                <div {...this.props} style={headerStyle}>{this.props.headertitle}</div>
                {this.props.children}
            </div>
        );
    }
}
