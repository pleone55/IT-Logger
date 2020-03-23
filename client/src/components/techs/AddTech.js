import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import axios from 'axios';

const AddTech = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if(firstName === '' || lastName === ''){
            M.toast({ html: "Please enter the tech's first and last name" });
        } else {
            axios.post('http://localhost:7000/api/techs', {
                firstName, lastName
            })
                .then(response => response.data)

            //Clear fields
            setFirstName('');
            setLastName('');
        }
    };

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="firstName" 
                            value={firstName} 
                            onChange={e => setFirstName(e.target.value)} 
                        />
                        <label htmlFor="firstName" className="active">First Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input 
                            type="text" 
                            name="lastName" 
                            value={lastName} 
                            onChange={e => setLastName(e.target.value)} 
                        />
                        <label htmlFor="lastName" className="active">Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer">
                <a 
                    href="#!" 
                    onClick={onSubmit} 
                    className="modal-close waves-effect red waves-light btn">
                    Enter
                </a>
            </div>
        </div>
    )
};
export default AddTech;