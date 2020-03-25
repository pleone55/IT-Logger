import { GET_TECHS, ADD_TECH, DELETE_TECH, SET_LOADING, TECHS_ERROR} from './types';

//Get techs
export const getTechs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:7000/api/techs');
        const data = await res.json();

        dispatch({
            type: GET_TECHS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
};

//Add tech
export const addTech = (tech) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:7000/api/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_TECH,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
};

//Delete tech
export const deleteTech = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`http://localhost:7000/api/techs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_TECH,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.data
        })
    }
};

//set loading
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};