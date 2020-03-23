import React from 'react';
import Moment from 'react-moment';
import axios from 'axios';

const LogItem = ({ log, removeFromDom }) => {

    const deleteLogs = logId => {
        axios.delete('http://localhost:7000/api/logs/' + logId)
            .then(response => {
                removeFromDom(logId)
            });
    };

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 
                    'red-text' : 'blue-text'}`}>{log.description}</a>
                    <br/>
                <span className="grey-text">
                    Last updated by: <span className="black-text">{log.tech}</span> on <Moment format="MMMM Do YYYY, 
                    h:mm:ss a">{log.created_at}</Moment>
                </span>
                <a href="#!" className="secondary-content" onClick={() => deleteLogs(log._id)}><i className="material-icons grey-text">delete</i></a>
            </div>
        </li>
    )
}
export default LogItem;