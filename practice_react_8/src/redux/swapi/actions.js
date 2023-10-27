import axios from "axios";

export const getPeople = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('https://swapi.dev/api/people');
            dispatch(getPeople({type: 'GET_PEOPLE',payload: response.data.results}))
        }
        catch (error){
            console.error(error)
        }
    }
}