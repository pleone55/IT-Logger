import React from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const LogItem = ({ log, deleteLog, setCurrent }) => {

    const onDelete = () => {
        deleteLog(log._id);
        M.toast({ html: 'Log deleted'})
    };

    return (
        <li className="collection-item">
            <div>
                <a href="#edit-log-modal" className={`modal-trigger ${log.attention ? 
                    'red-text' : 'blue-text'}`} onClick={() => setCurrent(log)}>{log.description}</a>
                    <br/>
                <span className="grey-text">
                    Last updated by: <span className="black-text">{log.tech}</span> on <Moment format="MMMM Do YYYY, 
                    h:mm:ss a">{log.updated_at}</Moment>
                </span>
                <a href="#!" className="secondary-content" onClick={onDelete}><i className="material-icons grey-text">delete</i></a>
            </div>
        </li>
    )
}
export default connect(null, { deleteLog, setCurrent })(LogItem);