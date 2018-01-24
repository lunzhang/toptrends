import { combineReducers } from 'redux';
import gridCharts from './gridCharts';
import chartsData from './chartsData';

export default combineReducers({
    chartsData,
    gridCharts
});
