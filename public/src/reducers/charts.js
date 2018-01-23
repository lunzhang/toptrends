const initalState = [{
        type: 'Youtube',
        key: 1,
        grid: {x: 0, y: 0, w: 5, h: 2}
    },{
        type: 'Youtube',
        key: 2,
        grid: {x: 0, y: 0, w: 5, h: 2}
    }];

export default (state = initalState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
