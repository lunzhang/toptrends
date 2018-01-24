import axios from 'axios';

const api_url = 'http://localhost:80/api/';

export const ADD_CHART = 'ADD_CHART';
export const DELETE_CHART = 'DELETE_CHART';
export const CHART_DATA = 'CHART_DATA';

export const deleteChart = id => ({
    type: DELETE_CHART,
    id
});

export const addChart = chartData => ({
    type: ADD_CHART,
    chartData
});

export const getChartData = chartType => (dispatch, getState) => {
    let chartURL = '';

    switch (chartType) {
        case 'Youtube':
            chartURL = 'youtube_trends'
            break;
    }

    axios.get(api_url + chartURL).then((resp) => {
        dispatch({
            type: CHART_DATA,
            chartType,
            data: resp.data,
        });
    });
}
