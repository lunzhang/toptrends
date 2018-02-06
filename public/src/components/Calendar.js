import React, { Component } from 'react';
import InfiniteCalendar from 'react-infinite-calendar';
import { BEGIN_DATE } from '../constants';
import styles from './Calendar.scss';

export default class Calendar extends Component {
    constructor(props) {
        super(props);

        this.today = new Date();
        this.today.setHours(0, 0, 0, 0);
        this.selectedDate = this.today;

        this.onSelect = this.onSelect.bind(this);
    }

    onSelect(date) {
        if (this.selectedDate.getTime() === date.getTime()) {
            this.props.onDateSelect(date);
        }
        this.selectedDate = date;
    }

    render() {
        return (
            this.props.container ?
            <InfiniteCalendar
                className={ styles.calendarContainer }
                height = { this.props.container.clientHeight - 144 }
                min={ BEGIN_DATE } minDate={ BEGIN_DATE }
                max={ this.today } maxDate={ this.today }
                onSelect={ this.onSelect }
            />
            :
            <div> </div>
        );
    }
}
