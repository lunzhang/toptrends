import React, { Component } from 'react';
import styles from './TrendView.scss';

export default class TrendView extends Component {
    render() {
        let data = [];

        if (this.props.data && this.props.data[this.props.date.toLocaleDateString()]) {
            data = this.props.data[this.props.date.toLocaleDateString()];
        }

        return (
            <div>
                {
                    data.map((data, i) => (
                        <div key={i} className={ styles.trend }>
                            <a href={ data.link }> { data.trend } </a>
                        </div>
                    ))
                }
            </div>
        );
    }
}
