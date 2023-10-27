const defaultState ={
    weatherData: {}
};

export const reducer  = (state = defaultState,action) => {
    switch (action.type) {
        case 'GET_WEATHER':
            return {...state, weatherData:action.payload};
        default:
            return state;
    }
}