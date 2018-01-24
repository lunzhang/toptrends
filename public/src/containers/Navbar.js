import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, Menu, MenuItem } from 'material-ui';

class Navbar extends Component {
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

export default connect()(Navbar);
