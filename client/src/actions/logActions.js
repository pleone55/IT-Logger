import { 
    GET_LOGS, 
    SET_LOADING, 
    LOGS_ERROR, 
    ADD_LOG, 
    DELETE_LOG, 
    SET_CURRENT, 
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from './types';

// export const getLogs = () => {
//     return async(dispatch) => {
//         setLoading();

//         const res = await fetch('http://localhost:7000/api/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     };
// };

//Get logs
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:7000/api/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

//Add logs
export const addLog = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:7000/api/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

//Delete logs
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();

        await fetch(`http://localhost:7000/api/logs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

//Set current log
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
}

//Clear current log
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT
    }
}

//Update log
export const updateLog = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`http://localhost:7000/api/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        })
    }
};

//Search logs
export const searchLogs = (text) => async dispatch => {
    dispatch({
        type: SEARCH_LOGS,
        payload: text
    });
    // try {
    //     setLoading();

    //     const res = await fetch(`http://localhost:7000/api/logs?q=${text}`);
    //     const data = await res.json();

    //     dispatch({
    //         type: SEARCH_LOGS,
    //         payload: data
    //     });
    // } catch (err) {
    //     dispatch({
    //         type: LOGS_ERROR,
    //         payload: err.response.data
    //     })
    // }
};

//Set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};