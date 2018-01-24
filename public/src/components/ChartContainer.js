import React, { Component } from 'react';
import styles from './ChartContainer.scss';

export default class ChartContainer extends Component {
    
    render() {
        const { deleteChart, id, ...chartProps } = this.props;

        return (
            <div style={chartProps.style} className={styles.containerStyle}>
                <div {...chartProps} style={{}} className={styles.headerStyle} >
                    <div className="header-title">
                        {this.props.headertitle}
                    </div>
                    <div className="delete-btn" onClick={() => deleteChart(id)}>
                        X
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
};
