import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
import Preloader from '../layout/Preloader';
import axios from 'axios';

const Logs = () => {
    const [logs, setLogs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getLogs();
        //eslint-disable-next-line
    }, []);

    const getLogs = () => {
        setLoading(true);
        axios.get('http://localhost:7000/api/logs')
            .then(response => {
                setLogs(response.data);
                setLoading(false);
            })
    };

    const removeFromDom = logId => {
        setLogs(logs.filter(log => log._id !== logId));
    }

    if(loading){
        return <Preloader/>
    }

    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && logs.length === 0 ? (<p className="center">No logs to show...</p>) : (
                logs.map(log => <LogItem log={log} removeFromDom={removeFromDom} key={log._id}/>)
            )}
        </ul>
    )
}
export default Logs;