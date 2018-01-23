import React, { Component } from 'react';
import { AppBar, Menu, MenuItem } from 'material-ui';

export default class Navbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <AppBar showMenuIconButton={false} title="Top Trends"
            position="static" color="default" iconElementRight={
                <div>
                </div>
            }>
            </AppBar>
        );
    }
}
