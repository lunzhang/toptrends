import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteChart } from '../actions';
import ClearIcon from 'material-ui/svg-icons/content/clear';
import styles from './ChartContainer.scss';

class ChartContainer extends Component {
    render() {
        const { deleteChart, id, dispatch, ...chartProps } = this.props;

        return (
            <div style={ chartProps.style } className={ styles.containerStyle }>
                <div { ...chartProps } style={ {} } className={ styles.headerStyle } >
                    <div className="header-title">
                        { this.props.headertitle }
                    </div>
                    <ClearIcon className="delete-btn" onClick={ () => deleteChart(id) }>
                    </ClearIcon>
                </div>
                { this.props.children }
            </div>
        );
    }
};

export default connect(() => ({}), { deleteChart })(ChartContainer);
