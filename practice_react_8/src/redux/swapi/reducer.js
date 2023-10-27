const defaultState = {
    people: []
};

export const reducer = (state = defaultState,action) => {
    switch (action.type) {
        case 'SET_PEOPLE':
            return {...state, people:action.payload};
        default:
            return state;
    }
}