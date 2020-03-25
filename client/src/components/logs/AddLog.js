import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addLog } from '../../actions/logActions';
import axios from 'axios';

const AddLog = ({ addLog }) => {
    const [description, setDescription] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');
    const [techs, setTechs] = useState([]);

    useEffect(() => {
        getTechs();
        //eslint-disable-next-line
    }, []);

    const getTechs = () => {
        axios.get('http://localhost:7000/api/techs')
            .then(response => {
                setTechs(response.data);
            })
    }

    const onSubmit = e => {
        e.preventDefault();
        if(description === '' || tech === ''){
            M.toast({ html: 'Please enter a log and tech' });
        } else {
            const newLog = {
                description,
                attention,
                tech
            };
            addLog(newLog);
            M.toast({ html: `Log added by ${tech}` });

            //Clear fields
            setDescription('');
            setTech('');
            setAttention(false)
        }
    };

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="description" 
                            value={description} 
                            onChange={e => setDescription(e.target.value)} 
                        />
                        <label htmlFor="description" className="active">Log Message</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select 
                            name="tech" 
                            value={tech} 
                            className="browser-default" 
                            onChange={e => setTech(e.target.value)}>
                                <option value="" disabled>Select Technician</option>
                                {techs.map(tech => (
                                    <option key={tech._id}>{tech.firstName} {tech.lastName}</option>
                                ))}
                            </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <p>
                            <label>
                                <input 
                                    type="checkbox" 
                                    className="filled-in" 
                                    checked={attention} 
                                    value={attention} 
                                    onChange={e => setAttention(!attention)} 
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    href="#!" 
                    onClick={onSubmit} 
                    className="modal-close waves-effect blue waves-light btn">
                    Enter
                </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: "75%",
    height: "75%"
};

export default connect(null, { addLog })(AddLog);