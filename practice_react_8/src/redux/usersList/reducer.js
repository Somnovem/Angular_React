const defaultState ={
    users: []
};

export const reducer  = (state = defaultState,action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users:action.payload};
        default:
            return state;
    }
}