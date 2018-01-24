import React, { Component } from 'react';
import styles from './ChartContainer.scss';
import ClearIcon from 'material-ui/svg-icons/content/clear';

export default class ChartContainer extends Component {
    render() {
        const { deleteChart, id, ...chartProps } = this.props;

        return (
            <div style={chartProps.style} className={styles.containerStyle}>
                <div {...chartProps} style={{}} className={styles.headerStyle} >
                    <div className="header-title">
                        {this.props.headertitle}
                    </div>
                    <ClearIcon className="delete-btn" onClick={() => deleteChart(id)}>
                    </ClearIcon>
                </div>
                {this.props.children}
            </div>
        );
    }
};
