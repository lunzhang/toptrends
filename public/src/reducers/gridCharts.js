import * as actions from '../actions';

const initalState = [
    {
        chartType: 'Youtube',
        key: 1,
        grid: {x: 0, y: 0, w: 4, h: 3}
    }
];

let key = initalState.length + 1;

export default (state = initalState, action) => {
    switch (action.type) {
        case actions.DELETE_CHART:
            return state.filter((elem) => elem.key !== action.id);
        case actions.ADD_CHART:
            const { chartData } = action;
            return [{chartType: chartData.chartType, key: ++key, grid: chartData.grid}, ...state];
        default:
            return state;
    }
};
