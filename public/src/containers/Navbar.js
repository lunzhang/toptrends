import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppBar, IconMenu, IconButton, Menu, MenuItem } from 'material-ui';
import AddIcon from 'material-ui/svg-icons/content/add';
import { addChart } from '../actions';

const addChartMenu = (chartTypes, addChart) => (
    <IconMenu
        iconButtonElement={<IconButton><AddIcon/></IconButton>}
        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
        targetOrigin={{horizontal: 'middle', vertical: 'top'}}
    >
        { chartTypes.map((chart) => <MenuItem key={chart.chartType} primaryText={chart.chartType}
        onClick={() => addChart({chartType: chart.chartType, grid: chart.grid})}/>)}
    </IconMenu>
);

class Navbar extends Component {
    render() {
        return (
            <AppBar showMenuIconButton={false} title="Top Trends"
            position="static" color="default" iconElementRight={
                addChartMenu(this.props.chartTypes, this.props.addChart)
            }>
            </AppBar>
        );
    }
}

export default connect(null, { addChart })(Navbar);
