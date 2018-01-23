import React, { Component } from 'react';
import styles from './ChartContainer.scss';

export default class ChartContainer extends Component {
    render() {
        return (
            <div style={this.props.style} className={styles.containerStyle}>
                <div {...this.props} style={{}} className={styles.headerStyle} >
                    <div className="header-title">
                        {this.props.headertitle}
                    </div>
                    <div className="close-btn" >
                        X
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}
