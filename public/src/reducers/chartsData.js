import * as actions from '../actions';

export default (state = {}, action) => {
    switch (action.type) {
        case actions.CHART_DATA:
            let newState = { ...state };
            const data = JSON.parse(action.data);

            data.forEach((trendData) => {
                newState[action.chartType] = {
                    [trendData.date]: trendData.trends,
                    ...newState[action.chartType]
                };
            });

            return newState;
    }
    return state;
};
