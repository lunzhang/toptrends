export const ADD_CHART = 'ADD_CHART';
export const DELETE_CHART = 'DELETE_CHART';

export const deleteChart = id => ({
    type: DELETE_CHART,
    id
});
