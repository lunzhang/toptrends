import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import styles from './Calendar.scss';

const displayOptions = {
};

export default class Calendar extends Component{
    render() {
        return (
            this.props.container ?
            <InfiniteCalendar className={ styles.calendarContainer } height = { this.props.container.clientHeight - 147}
                displayOptions={ displayOptions }/>
                :
                <div> </div>
        );
    }
}
