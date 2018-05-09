const activeView = (state = 0, action) => {
    switch (action.type) {
        case 'UPDATE_VIEW':
            return action.view;
        default:
            return state
    }
};

export default activeView